import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    const uniqueKey = 'id'

    await User.updateOrCreateMany(uniqueKey, [
      {
        id: 1,
        slug: 'upzini',
        email: 'upzini@upzini.com',
        name: 'Up-Zini Petiscaria',
        description: 'Bebidas especiais e petiscos inigualavel',
        password: 'Qwer123#',
        role: 'superadmin',
      },
      {
        id: 2,
        slug: 'pioneiro',
        email: 'pioneiro@upzini.com',
        name: 'Restaurante Pioneiro',
        description: 'O Sabor Pantaneiro está aqui! Venha Saborear!',
        bannerUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/4d/61/c4/fachada.jpg',
        password: 'Qwer123#',
        role: 'admin',
      },
    ])
    // Write your database queries inside the run method
  }
}
