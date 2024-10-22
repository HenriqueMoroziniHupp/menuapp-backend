import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        id: 1,
        idTenant: 2,
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
        id: 2,
        idTenant: 2,
        idCategory: 2,
        name: 'Macarrão a Bolonhesa',
        description:
          'Macarrão com molho de tomate estilo bolonhesa, feito com linguiça e carne bovina',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/clrlhpiwg0001femudetv9oqt.jpeg',
        priceSmall: 12.0,
        priceMedium: 16.0,
        priceLarge: 21.0,
      },
      {
        id: 3,
        idTenant: 2,
        idCategory: 2,
        name: 'Macarrão Carbonara',
        description: 'Macarrão com molho carbonara fresco com queijo parmesão',
        status: 'OUTOFSTOCK',
        imageUrl: 'https://vonaoca.com.br/wp-content/uploads/2022/04/5-5.jpg.webp',
        priceSmall: 15.0,
        priceMedium: 18.0,
        priceLarge: 22.0,
      },
      {
        id: 5,
        idTenant: 2,
        idCategory: 6,
        name: 'Churrascoo',
        description: 'Churrascoo',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm11awami0001b8wgb8zeh30z.webp',
        priceSingle: 7.0,
      },
      {
        id: 6,
        idTenant: 2,
        idCategory: 1,
        name: 'Fritas com Chaddar e Bacon',
        description: 'Fritas crocante com muito Chaddar e bacon',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17a6v200001h6wgfbfuhcmx.webp',
        priceSmall: 22.9,
        priceMedium: 24.9,
        priceLarge: 29.9,
      },
      {
        id: 7,
        idTenant: 2,
        idCategory: 1,
        name: 'Fritas com  Bacon',
        description: 'Fritas tradicionais com bastante bacon',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17a7tr10003h6wgb6xy42io.webp',
        priceSmall: 20.9,
        priceMedium: 25.9,
        priceLarge: 28.9,
      },
      {
        id: 8,
        idTenant: 2,
        idCategory: 1,
        name: 'Camarão Empanado',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17agguv000132wg9yoi5qbn.webp',
      },
      {
        id: 9,
        idTenant: 2,
        idCategory: 6,
        name: 'Picanha',
        description: 'Autentica Picanha assada e selada na manteiga',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17atzi3000332wgcikx29o8.webp',
        priceSingle: 95.0,
      },
      {
        id: 10,
        idTenant: 2,
        idCategory: 6,
        name: 'Maminha',
        description: 'Maminha assada ao bafo',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17aup01000532wg6xj65uyr.webp',
        priceSingle: 65.0,
      },
      {
        id: 11,
        idTenant: 2,
        idCategory: 6,
        name: 'Alcatra',
        description: 'Bifes selados na manteiga',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17awg4w000732wgee88b5om.webp',
        priceSingle: 85.0,
      },
      {
        id: 12,
        idTenant: 2,
        idCategory: 2,
        name: 'Macarrão com Linguicinha Defumada',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17axhjn000932wgc1x5gltw.webp',
      },
      {
        id: 13,
        idTenant: 2,
        idCategory: 2,
        name: 'Macarrão com Brocolis',
        description: 'Acompanha molho bechamel',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17ayvqv000b32wgeh0x17dm.webp',
      },
      {
        id: 14,
        idTenant: 2,
        idCategory: 2,
        name: 'Nhoque ao Molho Bolonhesa',
        description: 'Nhoques Artesanais',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17b0zpx000d32wg83sxf25b.webp',
      },
      {
        id: 15,
        idTenant: 2,
        idCategory: 15,
        name: 'Isca de peixes',
        description: 'Opções: Tilápia, Traíra e Tucanaré',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17b3yrz000f32wg4uc3c15k.webp',
      },
      {
        id: 16,
        idTenant: 2,
        idCategory: 15,
        name: 'Atum',
        description: 'Acompanha torrada, gingerlim e ervas verdes',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17b520j000h32wg69eh0u6n.webp',
      },
      {
        id: 17,
        idTenant: 2,
        idCategory: 15,
        name: 'Salmão Grelhado no Azeite',
        description: 'Acompanha ervas verdes, cebola roxa e tomate cereja',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17b6h1v000j32wgeugy4yq1.webp',
      },
      {
        id: 18,
        idTenant: 2,
        idCategory: 3,
        name: 'Petit Gâteau',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17badgf000l32wg24co0zpj.webp',
      },
      {
        id: 19,
        idTenant: 2,
        idCategory: 3,
        name: 'Brownie',
        description: 'Feito com castanhas',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17be3lt000n32wgg5kc9e38.webp',
      },
      {
        id: 20,
        idTenant: 2,
        idCategory: 2,
        name: 'Macarrão com Almondegas',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17bfcem000p32wgc0qv5q4r.webp',
      },
      {
        id: 21,
        idTenant: 2,
        idCategory: 8,
        name: 'Moscow Mule',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17bj7i5000r32wg9r5i4fjm.webp',
        priceSingle: 16.0,
      },
      {
        id: 22,
        idTenant: 2,
        idCategory: 8,
        name: 'Caipirinha',
        description: 'Sabores: Limão, Abacaxi e Frutas Vermelhas',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17bk542000t32wgf5dl9zio.webp',
        priceSingle: 10.0,
      },
      {
        id: 23,
        idTenant: 2,
        idCategory: 7,
        name: 'Cachaça',
        description: 'Consultar cachaça disponível',
        status: 'ACTIVE',
        imageUrl:
          'https://teste-adonis.s3.sa-east-1.amazonaws.com/images/cm17blvql000v32wgck97goi4.webp',
      },
    ])
  }
}
