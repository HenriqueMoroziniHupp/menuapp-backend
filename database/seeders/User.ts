import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    const uniqueKey = 'id'

    await User.updateOrCreateMany(uniqueKey, [
      {
        id: 1,
        slug: 'upzini',
        email: 'henriquemhpp@upzini.com',
        name: 'Up-Zini Petiscaria',
        password: 'secret',
        role: 'superadmin',
      },
      {
        id: 2,
        slug: 'hmpp',
        email: 'henriquemhpp@gmail.com',
        name: 'Hmpp Lanchonete',
        password: 'secret',
        role: 'superadmin',
      },
    ])
    // Write your database queries inside the run method
  }
}
