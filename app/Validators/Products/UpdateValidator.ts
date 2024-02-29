import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    idCategory: schema.number.optional(),
    name: schema.string.optional({ trim: true }),
    description: schema.string.optional({ trim: true }),
    imageUrl: schema.string.optional(),
    priceSmall: schema.number.optional(),
    priceMedium: schema.number.optional(),
    priceLarge: schema.number.optional(),
    priceSingle: schema.number.optional(),
  })
}
