import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        idTenant: 1,
        idCategory: 1,
        name: 'Batatinha Frita Tradicional',
        description: 'Fritas temperada com sal e com molho da casa',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/clqlvggcm0001ffmu7s9tgvu1.jpg',
        priceSmall: 19.9,
        priceMedium: 24.9,
        priceLarge: 29.9,
      },
      {
        idTenant: 1,
        idCategory: 2,
        name: 'Macarrão a Bolonhesa',
        description:
          'Macarrão com molho de tomate estilo bolonhesa, feito com linguiça e carne bovina',
        status: 'INACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/clrlhpiwg0001femudetv9oqt.jpeg',
        priceSmall: 12.0,
        priceMedium: 16.0,
        priceLarge: 21.0,
      },
      {
        idTenant: 1,
        idCategory: 2,
        name: 'Macarrão Carbonara',
        description: 'Macarrão com molho carbonara fresco com queijo parmesão',
        status: 'OUTOFSTOCK',
        imageUrl: 'https://vonaoca.com.br/wp-content/uploads/2022/04/5-5.jpg.webp',
        priceSmall: 15.0,
        priceMedium: 18.0,
        priceLarge: 22.0,
      },
    ])
    // Write your database queries inside the run method
  }
}
