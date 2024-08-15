import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_tenant')
      table.integer('id_category').unsigned().references('categories.id').onDelete('CASCADE')
      table.string('name').notNullable()
      table.string('description')
      table.enum('status', ['ACTIVE', 'OUTOFSTOCK', 'INACTIVE']).notNullable()
      table.string('image_url')
      table.decimal('price_small', 4, 2)
      table.decimal('price_medium', 4, 2)
      table.decimal('price_large', 4, 2)
      table.decimal('price_single', 4, 2)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
