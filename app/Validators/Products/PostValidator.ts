import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class PostValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    idCategory: schema.number(),
    name: schema.string({ trim: true }),
    description: schema.string.optional({ trim: true }),
    status: schema.enum(['ACTIVE', 'OUTOFSTOCK', 'INACTIVE'] as const),
    imageUrl: schema.string.optional(),
    prices: schema.array.optional().members(
      schema.object().members({
        name: schema.string({ trim: true }),
        price: schema.number(),
      })
    ),
  })
}
