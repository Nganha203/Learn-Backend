import { prisma } from "config/client"

const innitDatabase = async () => {
    const countUser = await prisma.user.count()
    const countRole = await prisma.role.count()
    if (countUser === 0) {
        await prisma.user.createMany({
            data: [
                {
                    username: 'edogawa@gmail.com',
                    password: '123456',
                    accountType: 'USER'
                },
                {
                    username: 'haibara@gmail.com',
                    password: '123456',
                    accountType: 'USER'
                },
                {
                    username: 'mori@gmail.com',
                    password: '123456',
                    accountType: 'USER'
                },
            ]
        })
    }
    else if (countRole === 0) {
        await prisma.role.createMany({
            data: [
                {
                    name: 'ADMIN',
                    description: 'ADMIN thì full quyền'
                },
                {
                    name: 'USER',
                    description: 'USER thì thông thường'
                },
            ]
        })
    }
    else {
        console.log('seed.ts >>> ALREADY INIT USER')
    }


}

export { innitDatabase }