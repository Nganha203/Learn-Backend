import getConnection from "config/database";
import { PrismaClient, Prisma } from '@prisma/client'
import { prisma } from "config/client";
import { name } from "ejs";

const handlePostUser = async (username: string, email: string, address: string) => {

    const user = await prisma.user.create({
        data: {
            name: username,
            email: email,
            address: address
        },
    })
    return user

}
const handleDeleteUser = async (id: string) => {
    const prisma = new PrismaClient()
    await prisma.user.delete({
        where: {
            id: +id,
        }
    })

}
const getAllUsers = async () => {
    const users = await prisma.user.findMany()
    return users
}
const getDetailUsersService = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: +id
        },
    })
    return user
}
const postUpdateUserService = async (id: string, name: string, email: string, address: string) => {
    await prisma.user.update({
        where: {
            id: +id
        },
        data: {
            name: name,
            email: email,
            address: address
        },
    })
}

export { handlePostUser, getAllUsers, handleDeleteUser, getDetailUsersService, postUpdateUserService }