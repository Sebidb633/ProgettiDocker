const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllNpcDescription = async () => {
    return await prisma.npcs.findMany({
        include: { descriptions: true }
    });
}

const getNpcDescription = async (npcId) => {
    return await prisma.npcs.findUnique({
        where: {
            id: Number(npcId)
        },
        include: {
            descriptions: {
                include: {
                    audio: true
                }
            }
        }
    });
}

const insertNpc = async (npcData) => {
    return await prisma.npcs.create({
        data: {
            class_id: npcData.class_id,
            description_id: npcData.description_id
        }
    });
}

module.exports = { getAllNpcDescription, getNpcDescription, insertNpc }