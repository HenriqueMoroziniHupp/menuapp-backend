import Route from '@ioc:Adonis/Core/Route'

Route.get('/', () => 'Hello UpZini')
// Authentication
Route.post('/admin/auth', 'AuthController.store')
Route.delete('/admin/auth', 'AuthController.destroy').middleware('auth')

// Products
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

// Categories
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

// Users Management
Route.get('/admin/users', 'UsersController.index').middleware(['acl:superadmin'])
Route.post('/admin/users', 'UsersController.store').middleware(['acl:superadmin'])
Route.put('/admin/users/:id', 'UsersController.update').middleware(['acl:superadmin'])
Route.delete('/admin/users/:id', 'UsersController.destroy').middleware(['acl:superadmin'])

// Me
Route.get('/admin/me', 'UsController').middleware(['acl:superadmin,admin'])

// Client Settings
Route.get('/admin/settings/:slug', 'ClientsController.show').middleware(['acl:superadmin,admin'])
Route.put('/admin/settings/:slug', 'ClientsController.update').middleware(['acl:superadmin,admin'])

// App
Route.get('/:slug/products', 'AppsController.indexCategoriesWithProducts')
Route.get('/client/:slug', 'AppsController.indexClient')
Route.get('/app/:slug', 'AppsController.appIndex')
