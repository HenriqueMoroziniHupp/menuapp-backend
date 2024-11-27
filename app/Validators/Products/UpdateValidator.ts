import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    idCategory: schema.number.optional(),
    name: schema.string.optional({ trim: true }),
    description: schema.string.nullableAndOptional({ trim: true }),
    status: schema.enum.optional(['ACTIVE', 'OUTOFSTOCK', 'INACTIVE'] as const),
    imageUrl: schema.string.optional(),
    prices: schema.array.optional().members(
      schema.object().members({
        name: schema.string.optional({ trim: true }),
        price: schema.number.optional(),
        id: schema.number.optional(),
      })
    ),
  })
}
