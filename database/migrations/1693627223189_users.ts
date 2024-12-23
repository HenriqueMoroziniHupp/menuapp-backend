import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('slug', 255).notNullable().unique()
      table.string('email', 255).notNullable().unique()
      table.string('name', 255).notNullable()
      table.string('description', 255)
      table
        .enum('status', ['PENDING', 'ACTIVE', 'BLOCKED', 'TERMINATED', 'TRIAL'])
        .defaultTo('PENDING')
      table.string('banner_url')
      table.string('password', 255).notNullable()
      table.enum('role', ['superadmin', 'admin']).defaultTo('admin')
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
