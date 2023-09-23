import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class ProductsController {
  // responsible for listing
  public async index({}: HttpContextContract) {
    const products = await Product.all()

    return products
  }

  // responsible for store on data base
  public async store({ request }: HttpContextContract) {
    const data = request.only([
      'category',
      'name',
      'description',
      'image_url',
      'price_small',
      'price_medium',
      'price_large',
      'price_single',
    ])

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
        data.image_url = imageData.image.filePath
      } catch (error) {
        console.warn('%cerror: ', 'color: MidnightBlue; background: Aquamarine;', error)
      }
    }

    const product = await Product.create(data)

    return product
  }

  // responsible for showing something
  public async show({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)

    return product
  }

  public async update({ request, params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)
    const data = await request.only([
      'category',
      'name',
      'description',
      'image_url',
      'price_small',
      'price_medium',
      'price_large',
      'price_single',
    ])

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
        data.image_url = imageData.image.filePath
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
