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

Route.on('/').render('beranda')
Route.get('/admin', 'Admin/UserController.index')

Route.group(()=>{
    Route.get('/sekolah', 'ProfileController.index')
    Route.get('/guru','ProfileGuruController.index')
}).prefix('/profile')

Route.group(()=>{
    Route.get('/','ArtikelController.index')
}).prefix('/artikel')

Route.group(()=>{
    Route.get('/','KontakController.index')
}).prefix('/kontak')