import { Request, Response } from "express"
import { getAllUsers, getDetailUsersService, handleDeleteUser, handlePostUser, postUpdateUserService } from "services/user.service"

const getHomePageController = async (req: Request, res: Response) => {
    const users = await getAllUsers()
    return res.render('home', { results: users })
}
const postDeleteUserController = async (req: Request, res: Response) => {
    const { id } = req.params
    await handleDeleteUser(id)
    return res.redirect('/')
}
const getDetailUserController = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await getDetailUsersService(id)
    return res.render('view-user', { id: id, user: user })
}
const updateUserController = async (req: Request, res: Response) => {
    const { id } = req.params
    const { username, email, address } = req.body
    await postUpdateUserService(id, username, email, address)
    return res.redirect('/')
}

export {
    getHomePageController,
    postDeleteUserController,
    getDetailUserController,
    updateUserController
}