import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Product from './Product'
export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public idTenant: number

  @column()
  public name: string

  @column()
  public status: 'ACTIVE' | 'INACTIVE'

  // categoria pertence a um usuario
  @belongsTo(() => User, { foreignKey: 'idTenant' })
  public user: BelongsTo<typeof User>

  @hasMany(() => Product, { foreignKey: 'idCategory' })
  public products: HasMany<typeof Product>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
