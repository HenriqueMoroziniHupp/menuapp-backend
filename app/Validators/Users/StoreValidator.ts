import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    slug: schema.string({ trim: true }),
    email: schema.string({ trim: true }),
    name: schema.string({ trim: true }),
    password: schema.string({ trim: true }),
  })
}
