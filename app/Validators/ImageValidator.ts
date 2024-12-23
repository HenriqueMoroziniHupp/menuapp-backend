import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ImageValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    image: schema.file.optional({
      size: '5mb',
      extnames: ['webp'],
    }),
  })
}
