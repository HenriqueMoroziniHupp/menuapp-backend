import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Category from 'App/Models/Category'
import Price from 'App/Models/Price'
export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public idTenant: number

  @column({ serializeAs: null })
  public idCategory: number

  // produto pertence a uma categoria
  @belongsTo(() => Category, { foreignKey: 'idCategory' })
  public category: BelongsTo<typeof Category>

  @hasMany(() => Price, { foreignKey: 'idProduct' })
  public prices: HasMany<typeof Price>

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public status: 'ACTIVE' | 'OUTOFSTOCK' | 'INACTIVE'

  @column()
  public imageUrl: string

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
