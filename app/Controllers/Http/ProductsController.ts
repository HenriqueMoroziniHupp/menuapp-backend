import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import User from 'App/Models/User'
import { schema } from '@ioc:Adonis/Core/Validator'
import { PostValidator, UpdateValidator } from 'App/Validators/Products/Index'
import Category from 'App/Models/Category'

export default class ProductsController {
  // responsible for listing
  public async index({ params }: HttpContextContract) {
    const { slug, idCategory } = params
    const user = await User.findByOrFail('slug', slug)

    if (idCategory) {
      const products = await Product.query()
        .where('idTenant', user.id)
        .where('idCategory', idCategory)

      return products
    }

    const productsAll = await Product.query().where('idTenant', user!.id)

    return productsAll
  }

  // responsible for showing something
  public async show({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    await product.load('category')

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
        console.warn(error)
      }
    }

    const product = await Product.create({ idTenant: tenant.id, ...data })
    return product
  }

  public async update({ request, params, auth, response }: HttpContextContract) {
    const tenant = await auth.authenticate()

    const product = await Product.findOrFail(params.id)
    if (tenant.id !== product.idTenant) return response.unauthorized()
    const data = await request.validate(UpdateValidator)

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
        console.warn(error)
      }
    }

    product.merge(data)
    await product.save()

    return product
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    const { id } = params
    const tenant = await auth.authenticate()
    const product = await Product.findOrFail(id)

    if (tenant.id !== product.idTenant) return response.unauthorized()

    await product.delete()
  }
}
