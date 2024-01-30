import { PrismaClient } from '@prisma/client'

const createHost = async (username, password, name, email, phoneNumber, profilePicture, aboutMe) => {
    const prisma = new PrismaClient()

    return await prisma.host.create({
        data: {
            username,
            password,
            name,
            email,
            phoneNumber,
            profilePicture,
            aboutMe
        }
    })
};

export default createHost;