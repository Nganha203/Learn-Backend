import express, { Express } from 'express'
import {
    getDetailUserController,
    getHomePageController,
    postDeleteUserController,
    updateUserController
} from '../controllers/user.controller'
import {
    getDashboardController,
    getOrderDashboardController,
    getProductDashboardController,
    getUserDashboardController,
    getCreateUserController,
    postCreateUserController,
} from 'controllers/admin/dashboard.controller'
import fileUploadMiddleware from 'src/middleware/multer'
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

function webRoutes(app: Express) {
    router.get('/', getHomePageController)
    router.post('/handle-delete-user/:id', postDeleteUserController)
    router.get('/handle-view-user/:id', getDetailUserController)
    router.post('/handle-update-user/:id', updateUserController)

    // ADMIN
    router.get('/admin', getDashboardController)
    router.get('/admin/user', getUserDashboardController)
    router.get('/admin/product', getProductDashboardController)
    router.get('/admin/order', getOrderDashboardController)
    router.get('/admin/create-user', getCreateUserController)
    router.post('/admin/handle-create-user', fileUploadMiddleware('avatar'), postCreateUserController)

    app.use(router)
}


export default webRoutes