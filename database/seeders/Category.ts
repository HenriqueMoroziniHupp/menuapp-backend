import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public async run() {
    const uniqueKey = 'id'

    await Category.updateOrCreateMany(uniqueKey, [
      {
        id: 1,
        idTenant: 1,
        name: 'Fritas',
      },
      {
        id: 2,
        idTenant: 1,
        name: 'Massas',
      },
    ])
  }
}
