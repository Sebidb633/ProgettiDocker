const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllPoster = async () => {
    return await prisma.posters.findMany({
        include: { descriptions: true }
    });
}

const insertPoster = async (posterData) => {
    return await prisma.posters.create({
        data: {
            image_url: posterData.image_url,
            class_id: posterData.class_id,
            description_id: posterData.description_id
        }
    });
}

module.exports = { getAllPoster, insertPoster }