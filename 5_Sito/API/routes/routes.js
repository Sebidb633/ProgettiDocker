const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/auth');
const subjectController = require('../controllers/subjectController');
const posterController = require('../controllers/posterController');
const npcController = require('../controllers/npcController');
const classroomController = require('../controllers/classroomController');
const statisticController = require('../controllers/statisticController');
const audioController = require('../controllers/audioController');

router.get('/subjects', checkAuth.checkAuth, subjectController.getAllSubjects);

router.get('/posters', checkAuth.checkAuth, posterController.getAllPoster);

router.get('/npcs', checkAuth.checkAuth, npcController.getAllNpcDescription);
router.get('/npcs/:id', checkAuth.checkAuth, npcController.getNpcDescription);

router.get('/classrooms/:id', checkAuth.checkAuth, classroomController.getClassPoster);
router.get('/classrooms/quiz/:id', checkAuth.checkAuth, classroomController.getClassQuiz);
router.put('/classrooms/update/:id', checkAuth.checkAuth, classroomController.updateDoorStatus);

router.get('/statistics', checkAuth.checkAuth, statisticController.getAllStatistics);
router.post('/statistics/insert', checkAuth.checkAuth, statisticController.insertNewStatistic);
router.put('/statistics/update/:id', checkAuth.checkAuth, statisticController.updateStatistic);

router.get('/audio', checkAuth.checkAuth, audioController.getAllAudio);
router.get('/audio/:id', checkAuth.checkAuth, audioController.getAudio);

module.exports = router;