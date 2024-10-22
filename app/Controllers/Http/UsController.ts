import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsController {
  public async handle({ auth }: HttpContextContract) {
    const profile = auth.authenticate()

    return profile
  }
}
