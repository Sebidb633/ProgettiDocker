const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getClassPoster = async (classId) => {
    const SERVER_IP = '10.4.0.21';
    const PORT = '4000';

    const getClassroom = await prisma.classrooms.findUnique({
        where: {
            id: Number(classId)
        },
        include: {
            posters: {
                include: {
                    descriptions: true
                }
            }
        }
    });

    if (getClassroom && getClassroom.posters){
        getClassroom.posters = getClassroom.posters.map(poster => ({
            ...poster,
            image_url: `http://${SERVER_IP}:${PORT}/uploads/image/${poster.image_url}`
        }))
    }
    return getClassroom;
}

const getClassQuiz = async (classId) => {
    return await prisma.classrooms.findUnique({
        where: {
            id: Number(classId)
        },
        include: {
            quizzes: true
        }
    })
}

const updateDoorStatus = async (classId, isOpen) => {
    return await prisma.classrooms.update({
        where: {
            id: Number(classId)
        },
        data: {
            isDoorOpen: isOpen
        }
    });
};

const insertClass = async (classData) => {
    return await prisma.classrooms.create({
        data: {
            class_num: classData.class_num,
            isDoorOpen: classData.isDoorOpen
        }
    });
}

module.exports = { getClassPoster, getClassQuiz, updateDoorStatus, insertClass }