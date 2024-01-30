import { PrismaClient } from "@prisma/client";

const updateBookingById = async (id, updatedBooking) => {
    const prisma = new PrismaClient();

    // const { user, property, ...rest } = updatedBooking;

    const booking = await prisma.booking.updateMany({
        where: { id },
        // data: {
        //     ...rest,
        //     user: user
        //         ? {
        //             connect: { id: user },
        //         }
        //         : undefined,
        //     property: property
        //         ? {
        //             connect: { id: property }
        //         }
        //         : undefined
        // }
        data: updatedBooking
    })

    return booking.count > 0 ? id : null

    // return booking
};

export default updateBookingById;

