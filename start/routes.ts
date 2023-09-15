import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'ProductsController.index')

Route.resource('/product', 'ProductsController').apiOnly()
