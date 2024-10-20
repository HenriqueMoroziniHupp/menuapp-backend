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
        query.whereNot('status', 'INACTIVE')
      })

    return categoriesWithProducts
  }
}
