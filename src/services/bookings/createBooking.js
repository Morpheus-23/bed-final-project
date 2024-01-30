import { PrismaClient } from '@prisma/client'

const createBooking = async (userId, propertyId, checkinDate, checkoutDate, numberOfGuests, totalPrice, bookingStatus) => {
    const prisma = new PrismaClient()

    const booking = await prisma.booking.create({
        data: {
            checkinDate,
            checkoutDate,
            numberOfGuests,
            totalPrice,
            bookingStatus,
            userId,
            propertyId
        }
    })

    return booking
};

export default createBooking;