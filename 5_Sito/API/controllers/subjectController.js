const subjectService = require('../services/subjectsServices');

const getAllSubjects = async (req,res) => {
    try {
        const subjects = await subjectService.getSubject();
        res.status(200).json(subjects);
    }catch (err){
        console.error(err);
        res.status(500).json({ error: 'Errore nel recupero delle materie' });
    }

}


module.exports = { getAllSubjects }