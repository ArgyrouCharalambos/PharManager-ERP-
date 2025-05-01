import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo,  } from '@adonisjs/lucid/orm'
import Product from '#models/product'
import * as relations  from '@adonisjs/lucid/types/relations'

export default class Sale extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare productId: number

  @column()
  declare quantitySold: number

  @column()
  declare totalPrice: number

  @column()
  declare userid: number

  @column()
  declare paymentMethod: string

  @belongsTo(() => Product)
  declare product: relations.BelongsTo<typeof Product>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
  
}