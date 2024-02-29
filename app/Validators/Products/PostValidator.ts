import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class PostValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    idCategory: schema.number(),
    name: schema.string({ trim: true }),
    description: schema.string({ trim: true }),
    imageUrl: schema.string.optional(),
    priceSmall: schema.number.optional(),
    priceMedium: schema.number.optional(),
    priceLarge: schema.number.optional(),
    priceSingle: schema.number.optional(),
  })
}
