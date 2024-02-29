import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public idTenant: number

  @column()
  public name: string

  @column()
  public icon: string

  // categoria pertence a um usuario
  @belongsTo(() => User, { foreignKey: 'idTenant' })
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
