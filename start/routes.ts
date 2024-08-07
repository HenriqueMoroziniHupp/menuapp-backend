import Route from '@ioc:Adonis/Core/Route'

// Authentication --------
Route.post('/admin/auth', 'AuthController.store')
Route.delete('/admin/auth', 'AuthController.destroy').middleware('auth')

// Users --------
Route.get('/admin/users', 'UsersController.index').middleware(['acl:superadmin'])
Route.post('/admin/users', 'UsersController.store').middleware(['acl:superadmin'])

// Me
Route.get('/admin/me', 'UsController.handle')

// Products ---------
Route.group(() => {
  Route.group(() => {
    Route.resource('/products/', 'ProductsController')
      .apiOnly()
      .except(['index', 'show'])
      .middleware({
        store: ['acl:superadmin,admin'],
        update: ['acl:superadmin,admin'],
        destroy: ['acl:superadmin,admin'],
      })
  }).prefix('/admin')

  Route.resource('/products/:slug/:idCategory?', 'ProductsController')
    .apiOnly()
    .except(['store', 'update', 'destroy'])
})

// Categories --------
Route.group(() => {
  Route.group(() => {
    Route.resource('/categories/', 'CategoriesController')
      .apiOnly()
      .except(['index', 'show'])
      .middleware({
        store: ['acl:superadmin,admin'],
        update: ['acl:superadmin,admin'],
        destroy: ['acl:superadmin,admin'],
      })
  }).prefix('/admin')

  Route.resource('/categories/:slug', 'CategoriesController')
    .apiOnly()
    .except(['store', 'update', 'destroy'])
})
