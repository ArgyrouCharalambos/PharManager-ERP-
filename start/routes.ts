/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import DashboardController from '#controllers/dashboard_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const UsersController = () => import("#controllers/users_controller")
const EmailsController = () => import("#controllers/emails_controller")
const ProductsController = () => import("#controllers/products_controller")
const SalesController = () => import("#controllers/sales_controller")

// Products
router.group(() => {
  router.resource('products', ProductsController).except(['show'])
  router.get('products/alerts', [ProductsController , 'alerts'])

// Sales
  router.resource('sales', SalesController).except(['show', 'edit', 'update'])

  router.get('/', [DashboardController, 'index'])
}).use(middleware.auth())

router.on('/login').render('security/login')
router.on('/signin').render('security/signin')
router.on('/forgotview').render('security/passwordforgot')
router.get('/passwordedit/:email',[EmailsController, 'passwordedit'])
    

router.get("/deconnect", [UsersController , 'deconnect'])
router.post("/signin", [UsersController , 'create'])
router.get("/connexion", [UsersController , 'login'])
router.post("/passwordforgot",[EmailsController, 'sendPassword'])
router.post("/passwordEnregistrement/:email",[EmailsController, 'passwordEnregistrement'])