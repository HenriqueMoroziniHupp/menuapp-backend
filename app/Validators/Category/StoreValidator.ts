import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }),
    icon: schema.string.optional({ trim: true }),
    status: schema.enum(['ACTIVE', 'INACTIVE'] as const),
  })
}
