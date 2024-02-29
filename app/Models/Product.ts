import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Category from 'App/Models/Category'
export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public idTenant: number

  @column()
  public idCategory: number

  // produto pertence a uma categoria
  @belongsTo(() => Category, { foreignKey: 'idCategory' })
  public category: BelongsTo<typeof Category>

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

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
