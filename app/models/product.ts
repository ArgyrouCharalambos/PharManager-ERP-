import { DateTime } from 'luxon'
import { BaseModel, column , hasMany } from '@adonisjs/lucid/orm'
import Sale from '#models/sale'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare quantity: number

  @column()
  declare price: number

  @column()
  declare userid: number

  @column.date()
  declare expirationDate: DateTime

  @column()
  declare alertExpired: boolean

  @hasMany(() => Sale)
  declare sales: HasMany<typeof Sale>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  public async isExpired() {
    return this.expirationDate < DateTime.now()
  }
}