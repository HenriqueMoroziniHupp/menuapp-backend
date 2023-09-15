import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public category: string

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public imageUrl: string

  @column()
  public priceSmall: number

  @column()
  public priceMedium: number

  @column()
  public priceLarge: number

  @column()
  public priceSingle: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
