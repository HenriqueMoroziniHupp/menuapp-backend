import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { StoreValidator } from 'App/Validators/Users/StoreValidator'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return User.all()
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)

    await User.create(data)
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
