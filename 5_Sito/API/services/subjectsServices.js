const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getSubject = async () => {
    return await prisma.subjects.findMany({
        include: { classrooms: true }
    });
}

const insertSubject = async (subjectData) => {
    return await prisma.subjects.create({
        data: {
            name: subjectData.name,
            class_id: subjectData.class_id
        }
    });
}

module.exports = { getSubject, insertSubject }