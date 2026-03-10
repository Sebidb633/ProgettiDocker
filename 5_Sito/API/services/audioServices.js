const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllAudio = async () => {
    return await prisma.audio.findMany({
        include: { descriptions: true }
    });
}

const getAudio = async (audioId) => {
    return await prisma.audio.findUnique({
        where: {
            id: Number(audioId)
        },
        include: {
            descriptions: true
        }
    });
}

module.exports = { getAllAudio, getAudio }