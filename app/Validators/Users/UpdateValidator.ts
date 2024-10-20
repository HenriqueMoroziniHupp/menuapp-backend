import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    slug: schema.string.optional({ trim: true }),
    email: schema.string.optional({ trim: true }),
    name: schema.string.optional({ trim: true }),
    password: schema.string.optional({ trim: true }),
    description: schema.string.optional({ trim: true }),
    bannerUrl: schema.string.optional({ trim: true }),
    status: schema.enum.optional(['PENDING', 'ACTIVE', 'BLOCKED', 'TERMINATED', 'TRIAL'] as const),
  })
}
