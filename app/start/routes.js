'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/*
Route.on('/').render('home', {
  auth: 'false'
})
*/

Route.get('/', 'HomeController.index')

Route.get('/register', 'RegisterController.index')
Route.get('/login', 'LoginController.index')
Route.get('/forgot-password', 'LoginController.forgot_password')
Route.get('/logout', 'LoginController.logout')


Route.post('/register', 'RegisterController.store')
Route.post('/login', 'LoginController.store')

Route.post('/country/set', 'CountryController.setCountry')
Route.post('/Gender/set', 'UserController.setGender')
Route.post('/pay', 'PayPalController.charge')
