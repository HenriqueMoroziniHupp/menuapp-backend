import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import User from 'App/Models/User'
import { schema } from '@ioc:Adonis/Core/Validator'
import { PostValidator, UpdateValidator } from 'App/Validators/Products/Index'

export default class ProductsController {
  // responsible for listing
  public async index({ params }: HttpContextContract) {
    const { slug, idCategory } = params
    if (!slug) return Product.all()

    console.log('%cslug: ', 'color: MidnightBlue; background: Aquamarine;', slug)
    console.log('%cid: ', 'color: MidnightBlue; background: Aquamarine;', idCategory)

    const user = await User.findByOrFail('slug', slug)

    if (idCategory) {
      const products = await Product.query()
        .where('idTenant', user.id)
        .where('idCategory', idCategory)

      return products
    }

    const products = await Product.query().where('idTenant', user!.id)

    return products
  }

  // responsible for store on data base
  public async store({ request, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const data = await request.validate(PostValidator)
    const imageData = await request.validate({
      schema: schema.create({
        image: schema.file.optional({
          size: '5mb',
          extnames: ['jpg', 'jpeg', 'png'],
        }),
      }),
    })

    if (imageData.image) {
      try {
        await imageData.image.moveToDisk('images', {}, 's3')
        data.imageUrl = imageData.image.filePath
      } catch (error) {
        console.warn('%cerror: ', 'color: MidnightBlue; background: Aquamarine;', error)
      }
    }

    const product = await Product.create({ idTenant: user.id, ...data })
    return product
  }

  // responsible for showing something
  public async show({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    await product.load('category')

    return product
  }

  public async update({ request, params, auth }: HttpContextContract) {
    // const user = await auth.authenticate()

    const product = await Product.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)

    const imageData = await request.validate({
      schema: schema.create({
        image: schema.file.optional({
          size: '5mb',
          extnames: ['jpg', 'jpeg', 'png'],
        }),
      }),
    })

    if (imageData.image) {
      try {
        await imageData.image.moveToDisk('images', {}, 's3')
        data.imageUrl = imageData.image.filePath
      } catch (error) {
        console.warn('%cerror: ', 'color: MidnightBlue; background: Aquamarine;', error)
      }
    }

    product.merge(data)
    await product.save()

    return product
  }

  public async destroy({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    await product.delete()
  }
}
