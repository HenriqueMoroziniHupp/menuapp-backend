import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Price from 'App/Models/Price'

export default class extends BaseSeeder {
  public async run() {
    await Price.createMany([
      {
        idProduct: 1,
        name: 'Pequeno',
        price: 19.9,
      },
      {
        idProduct: 1,
        name: 'Medio',
        price: 24.9,
      },
      {
        idProduct: 1,
        name: 'Grande',
        price: 29.9,
      },
      {
        idProduct: 2,
        name: 'Pequeno',
        price: 12.0,
      },
      {
        idProduct: 2,
        name: 'Medio',
        price: 16.0,
      },
      {
        idProduct: 2,
        name: 'Grande',
        price: 21.0,
      },
      {
        idProduct: 3,
        name: 'Pequeno',
        price: 15.0,
      },
      {
        idProduct: 3,
        name: 'Medio',
        price: 18.0,
      },
      {
        idProduct: 3,
        name: 'Grande',
        price: 22.0,
      },
      {
        idProduct: 5,
        name: 'Preço Unico',
        price: 7.0,
      },
      {
        idProduct: 6,
        name: 'Pequeno',
        price: 22.9,
      },
      {
        idProduct: 6,
        name: 'Medio',
        price: 24.9,
      },
      {
        idProduct: 6,
        name: 'Grande',
        price: 29.9,
      },
      {
        idProduct: 7,
        name: 'Pequeno',
        price: 20.9,
      },
      {
        idProduct: 7,
        name: 'Medio',
        price: 25.9,
      },
      {
        idProduct: 7,
        name: 'Grande',
        price: 28.9,
      },
      {
        idProduct: 9,
        name: 'Preço Unico',
        price: 95.0,
      },
      {
        idProduct: 10,
        name: 'Preço Unico',
        price: 65.0,
      },
      {
        idProduct: 11,
        name: 'Preço Unico',
        price: 85.0,
      },
      {
        idProduct: 21,
        name: 'Preço Unico',
        price: 16.0,
      },
      {
        idProduct: 22,
        name: 'Preço Unico',
        price: 10.0,
      },
    ])
  }
}
