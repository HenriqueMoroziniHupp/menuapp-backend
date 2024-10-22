import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UpdateValidator } from 'App/Validators/Users/UpdateValidator'
import ImageValidator from 'App/Validators/ImageValidator'
import User from 'App/Models/User'

export default class ClientsController {
  public async index({ params }: HttpContextContract) {
    const { slug } = params
    const client = await User.findByOrFail('slug', slug)

    return client
  }

  public async show({ params }: HttpContextContract) {
    const { slug } = params
    const client = await User.findByOrFail('slug', slug)

    return client
  }

  public async update({ params, request, response, auth }: HttpContextContract) {
    const { slug } = params
    const loggedClient = await auth.authenticate()
    const userSettings = await User.findByOrFail('slug', slug)

    if (loggedClient.slug !== slug) response.unauthorized()

    const data = await request.validate(UpdateValidator)
    const imageData = await request.validate(ImageValidator)

    if (imageData.image) {
      try {
        await imageData.image.moveToDisk('images', {}, 's3')
        data.bannerUrl = imageData.image.filePath
      } catch (error) {
        response.unprocessableEntity()
      }
    }

    userSettings.merge(data)

    await userSettings.save()

    return userSettings
  }
}
