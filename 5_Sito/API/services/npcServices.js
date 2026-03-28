const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllNpcDescription = async () => {
    return await prisma.npcs.findMany({
        include: { descriptions: true }
    });
}

const getNpcDescription = async (npcId) => {
    // const SERVER_IP = '10.4.0.21';
    const SERVER_IP = '127.0.0.1';
    const PORT = '4000';
    const npcData = await prisma.npcs.findUnique({
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

    if (npcData && npcData.descriptions && npcData.descriptions.audio.length > 0) {
        npcData.descriptions.audio = npcData.descriptions.audio.map(a => ({
            ...a,
            audio_url: a.audio_url ? `http://${SERVER_IP}:${PORT}/uploads/audio/${a.audio_url}` : null
        }));
    }
    return npcData;
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