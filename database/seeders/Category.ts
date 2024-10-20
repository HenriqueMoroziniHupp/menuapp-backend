import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class extends BaseSeeder {
  public async run() {
    const uniqueKey = 'id'

    await Category.updateOrCreateMany(uniqueKey, [
      {
        id: 1,
        idTenant: 2,
        name: 'Fritas',
        status: 'ACTIVE',
      },
      {
        id: 2,
        idTenant: 2,
        name: 'Massas',
        status: 'ACTIVE',
      },
      {
        id: 3,
        idTenant: 2,
        name: 'Sobremesas',
        status: 'ACTIVE',
      },
      {
        id: 4,
        idTenant: 2,
        name: 'Batata',
        status: 'ACTIVE',
      },
      {
        id: 5,
        idTenant: 2,
        name: 'Cervejas',
        status: 'ACTIVE',
      },
      {
        id: 6,
        idTenant: 2,
        name: 'Churrasco',
        status: 'ACTIVE',
      },
      {
        id: 7,
        idTenant: 2,
        name: 'Doses',
        status: 'ACTIVE',
      },
      {
        id: 8,
        idTenant: 2,
        name: 'Drinks',
        status: 'ACTIVE',
      },
      {
        id: 9,
        idTenant: 2,
        name: 'Porções',
        status: 'ACTIVE',
      },
      {
        id: 10,
        idTenant: 2,
        name: 'Caldos',
        status: 'ACTIVE',
      },
      {
        id: 11,
        idTenant: 2,
        name: 'Espetinhos',
        status: 'ACTIVE',
      },
      {
        id: 12,
        idTenant: 2,
        name: 'Frios',
        status: 'ACTIVE',
      },
      {
        id: 13,
        idTenant: 2,
        name: 'Vinhos',
        status: 'ACTIVE',
      },
      {
        id: 14,
        idTenant: 2,
        name: 'Cervejas Artesanais',
        status: 'ACTIVE',
      },
      {
        id: 15,
        idTenant: 2,
        name: 'Peixes',
        status: 'ACTIVE',
      },
      {
        id: 16,
        idTenant: 2,
        name: 'Cervejas',
        status: 'ACTIVE',
      },
    ])
  }
}
