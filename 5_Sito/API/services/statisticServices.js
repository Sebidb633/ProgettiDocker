const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllStatistics = async () => {
    return await prisma.statistics.findMany();
}

const insertNewStatistic = async (statisticData) => {
    const time = `1970-01-01T${statisticData.visiting_time}.000Z`

    return await prisma.statistics.create({
        data: {
            developer_percent: statisticData.developer_percent,
            system_engineers_percent: statisticData.system_engineers_percent,
            daily_player: statisticData.daily_player,
            classroom_visited: statisticData.classroom_visited,
            visiting_time: time
        }
    });
}

const updateStatistics = async (statisticData,id) => {
    const time = `1970-01-01T${statisticData.visiting_time}.000Z`
    if (statisticData.visiting_time){
        statisticData.visiting_time = time;
    }

    return await prisma.statistics.update({
        where: {
            id: Number(id)
        },
        data: statisticData
    })
}

module.exports = { getAllStatistics, insertNewStatistic, updateStatistics }