import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import User from 'App/Models/User'
import { StoreValidator, UpdateValidator } from 'App/Validators/Category/Index'

export default class CategoriesController {
  // publics methods
  public async index({ params }: HttpContextContract) {
    const { slug } = params
    const user = await User.findByOrFail('slug', slug)
    const categoriesTenancy = await Category.query().where('idTenant', user.id)

    return categoriesTenancy
  }

  public async show({ params }: HttpContextContract) {
    const { slug, id } = params
    const user = await User.findByOrFail('slug', slug)
    const category = await Category.query().where('idTenant', user.id).where('id', id)

    return category
  }

  // admin methods
  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const user = await auth.authenticate()
    const newCategory = await Category.create({ idTenant: user.id, ...data })

    return newCategory
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
    const tenant = await auth.authenticate()
    const category = await Category.findOrFail(id)

    if (tenant.id !== category.idTenant) return response.unauthorized()

    await category.delete()

    return response
  }
}
