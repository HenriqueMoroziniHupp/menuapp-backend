import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { StoreValidator } from 'App/Validators/Users/StoreValidator'
import { UpdateValidator } from 'App/Validators/Users/UpdateValidator'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return User.all()
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const newUser = await User.create(data)

    return newUser
  }

  public async show({}: HttpContextContract) {}

  public async update({ params, request }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const user = await User.findOrFail(params.id)

    user.merge(data)
    await user.save()

    return user
  }

  public async destroy({ params }: HttpContextContract) {
    const { id } = params
    const user = await User.findOrFail(id)

    user.delete()

    return
  }
}
