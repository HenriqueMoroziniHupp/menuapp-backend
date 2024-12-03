import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Category from 'App/Models/Category'

export default class AppsController {
  public async indexClient({ params }: HttpContextContract) {
    const { slug } = params

    const client = await User.findByOrFail('slug', slug)

    return client
  }

  public async indexCategoriesWithProducts({ params }: HttpContextContract) {
    const { slug } = params
    const user = await User.findByOrFail('slug', slug)

    const categoriesWithProducts = await Category.query()
      .where('idTenant', user.id)
      .has('products')
      .preload('products', (query) => {
        query.whereNot('status', 'INACTIVE').preload('prices')
      })

    return categoriesWithProducts
  }

  public async appIndex({ params }: HttpContextContract) {
    const { slug } = params

    const all = await User.query()
      .where('slug', slug)
      .has('categories')
      .preload('categories', (categoryQuery) => {
        categoryQuery
          .has('products')
          .whereNot('status', 'INACTIVE')
          .preload('products', (queryProduct) => {
            queryProduct.whereNot('status', 'INACTIVE').preload('prices')
          })
      })
      .firstOrFail()

    return all
  }
}
