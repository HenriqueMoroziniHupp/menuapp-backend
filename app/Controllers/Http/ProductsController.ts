import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import User from 'App/Models/User'
import { schema } from '@ioc:Adonis/Core/Validator'
import { PostValidator, UpdateValidator } from 'App/Validators/Products/Index'
import Category from 'App/Models/Category'
import Price from 'App/Models/Price'

export default class ProductsController {
  // responsible for listing
  public async index({ params }: HttpContextContract) {
    const { slug, idCategory } = params
    const user = await User.findByOrFail('slug', slug)

    // TODO: turn method for admin, because list INACTIVE products
    if (idCategory) {
      const products = await Product.query()
        .where('idTenant', user.id)
        .where('idCategory', idCategory)
        .preload('category')
        .preload('prices')

      return products
    }

    const productsAll = await Product.query()
      .where('idTenant', user!.id)
      .preload('category')
      .preload('prices')

    return productsAll
  }

  // responsible for showing something
  public async show({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    await product.load('category')
    await product.load('prices')

    return product
  }

  // responsible for store on data base
  public async store({ request, auth, response }: HttpContextContract) {
    const tenant = await auth.authenticate()
    const data = await request.validate(PostValidator)

    const category = await Category.findOrFail(data.idCategory)
    if (tenant.id !== category.idTenant) return response.unauthorized()

    const imageData = await request.validate({
      schema: schema.create({
        image: schema.file.optional({
          size: '5mb',
          extnames: ['jpg', 'jpeg', 'png', 'webp'],
        }),
      }),
    })

    if (imageData.image) {
      try {
        await imageData.image.moveToDisk('images', {}, 's3')
        data.imageUrl = imageData.image.filePath
      } catch (error) {
        return response.badRequest()
      }
    }

    const product = await Product.create({ idTenant: tenant.id, ...data })
    if (data.prices && data.prices.length) {
      await Price.createMany(
        data.prices.map((price) => ({
          idProduct: product.id,
          ...price,
        }))
      )
    }
    return
  }

  public async update({ request, params, auth, response }: HttpContextContract) {
    const tenant = await auth.authenticate()

    const product = await Product.findOrFail(params.id)
    if (tenant.id !== product.idTenant) return response.unauthorized()
    const data = await request.validate(UpdateValidator)

    const imageData = await request.validate({
      schema: schema.create({
        image: schema.file.optional({
          size: '1mb',
          extnames: ['jpg', 'jpeg', 'png', 'webp'],
        }),
      }),
    })

    if (imageData.image) {
      try {
        await imageData.image.moveToDisk('images', {}, 's3')
        data.imageUrl = imageData.image.filePath
      } catch (error) {
        return response.badRequest()
      }
    }

    product.merge(data)
    await product.save()

    const prices = data.prices
    if (!prices) return

    const updatesPrices = prices.filter((price) => price.id)
    const newPrices = prices.filter((price) => !price.id)
    const payloadPriceIds = updatesPrices.map((price) => price.id) as number[]

    const pricesDb = await Price.findMany(payloadPriceIds)
    const unauthorizedPrices = pricesDb.some((price) => price.idProduct !== product.id)
    if (unauthorizedPrices) return response.unauthorized()

    await Price.query().where('id_product', product.id).whereNotIn('id', payloadPriceIds).delete()

    if (updatesPrices.length) {
      await Price.updateOrCreateMany('id', updatesPrices)
    }

    if (newPrices.length) {
      await Price.createMany(
        newPrices.map((price) => ({
          ...price,
          idProduct: product.id,
        }))
      )
    }

    return
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    const { id } = params
    const tenant = await auth.authenticate()
    const product = await Product.findOrFail(id)

    if (tenant.id !== product.idTenant) return response.unauthorized()

    await product.delete()
  }
}
