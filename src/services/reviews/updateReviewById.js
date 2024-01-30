import { PrismaClient } from "@prisma/client";

const updateReviewById = async (id, updatedReview) => {
    const prisma = new PrismaClient();

    // const { user, property, ...rest } = updatedReview;

    const review = await prisma.review.updateMany({
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
        data: updatedReview
    })

    return review.count > 0 ? id : null

    // return review
};

export default updateReviewById;