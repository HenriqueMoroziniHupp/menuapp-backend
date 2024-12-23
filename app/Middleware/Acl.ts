import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>,
    allowedRoles: string[]
  ) {
    const user = await auth.authenticate()

    if (!allowedRoles.includes(user.role))
      return response.unauthorized({ error: { message: 'Access Denied' } })
    // code for middleware goes here. ABOVE THE NEXT CALL
    await next()
  }
}
