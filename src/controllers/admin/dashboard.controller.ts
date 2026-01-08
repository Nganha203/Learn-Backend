import { Request, Response } from "express"
import { getAllUsers, getRoleUser, handlePostUser } from "services/user.service"

const getDashboardController = async (req: Request, res: Response) => {
    return res.render('admin/dashboard/show.ejs')
}
const getUserDashboardController = async (req: Request, res: Response) => {
    const users = await getAllUsers()
    return res.render('admin/user/show.ejs', { users })
}
const getProductDashboardController = async (req: Request, res: Response) => {
    return res.render('admin/product/show.ejs')
}
const getOrderDashboardController = async (req: Request, res: Response) => {
    return res.render('admin/order/show.ejs')
}
const getCreateUserController = async (req: Request, res: Response) => {
    const roles = await getRoleUser()
    return res.render('admin/user/create.ejs', { roles })
}
const postCreateUserController = (req: Request, res: Response) => {
    const { username, email, password, role, address } = req.body
    const a = handlePostUser(username, email, password, role, address)
    return res.redirect('/admin/user')
}

export {
    getDashboardController,
    getUserDashboardController,
    getProductDashboardController,
    getOrderDashboardController,
    getCreateUserController,
    postCreateUserController,
}