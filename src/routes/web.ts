import express, { Express } from 'express'
import {
    getCreateUserController,
    getDetailUserController,
    getHomePageController,
    postCreateUserController,
    postDeleteUserController,
    updateUserController
} from '../controllers/user.controller'
const router = express.Router()

function webRoutes(app: Express) {
    router.get('/', getHomePageController)
    router.get('/create-user', getCreateUserController)
    router.post('/handle-create-user', postCreateUserController)
    router.post('/handle-delete-user/:id', postDeleteUserController)
    router.get('/handle-view-user/:id', getDetailUserController)
    router.post('/handle-update-user/:id', updateUserController)

    app.use(router)
}


export default webRoutes