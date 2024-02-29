import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import User from 'App/Models/User'
import { StoreValidator, UpdateValidator } from 'App/Validators/Category/Index'

export default class CategoriesController {
  public async index({ params }: HttpContextContract) {
    const { slug } = params
    if (!slug) return Category.all()

    const user = await User.findByOrFail('slug', slug)
    const categories = await Category.query().where('idTenant', user!.id)

    return categories
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const user = await auth.authenticate()
    await Category.create({ idTenant: user.id, ...data })

    return
  }

  public async show({ params }: HttpContextContract) {
    const category = await Category.findOrFail(params.id)

    return category
  }

  public async update({ params, request, response, auth }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const category = await Category.findOrFail(params.id)

    if (auth.user?.id !== category.idTenant) return response.unauthorized()

    category.merge(data)
    await category.save()

    return response
  }

  public async destroy({ params, auth, response }: HttpContextContract) {
    const { id } = params
    const category = await Category.findOrFail(id)

    if (auth.user?.id !== category.idTenant) return response.unauthorized()

    await category.delete()

    return response
  }
}
