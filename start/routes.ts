import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', 'ProductsController.index')

// Products --------
Route.post('/product', 'ProductsController.store').middleware(['acl:superadmin,admin'])
Route.get('/product/:slug/:idCategory/:id', 'ProductsController.show')
Route.get('/product/:slug?/:idCategory?', 'ProductsController.index')
Route.resource('/product/:slug', 'ProductsController')
  .apiOnly()
  .except(['index', 'show', 'store'])
  .middleware({
    store: ['acl:superadmin,admin'],
    update: ['acl:superadmin,admin'],
    destroy: ['acl:superadmin,admin'],
  })

// Authentication --------
Route.post('/auth', 'AuthController.store')
Route.delete('/auth', 'AuthController.destroy').middleware('auth')

// Categories --------
// Route.resource('/categories/:slug', 'CategoriesController')
//   .apiOnly()
//   .middleware({
//     store: ['acl:superadmin,admin'],
//     update: ['acl:superadmin,admin'],
//     destroy: ['acl:superadmin,admin'],
//   })

Route.get('/categories/:slug?', 'CategoriesController.index')
Route.get('/categories/:slug/:id', 'CategoriesController.show')
Route.post('/categories', 'CategoriesController.store').middleware(['acl:superadmin,admin'])
Route.put('/categories/:id', 'CategoriesController.update').middleware(['acl:superadmin,admin'])
Route.delete('/categories/:id', 'CategoriesController.destroy').middleware(['acl:superadmin,admin'])
