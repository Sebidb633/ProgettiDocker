const classService = require('../services/classroomServices');

const getClassPoster = async (req,res) => {
    try {
        const { id } = req.params;
        const classroom = await classService.getClassPoster(id);

        if (!classroom){
            return res.status(404).json({ message: "Classe non trovata" })
        }

        res.status(200).json(classroom);
    }catch (err){
        console.error(err);
        res.status(500).json({ error: 'Errore nel recupero della classe' });
    }
}

const updateDoorStatus = async (req,res) => {
    try{
        const { id } = req.params;
        const { isDoorOpen } = req.body;
        
        const classroom = await classService.updateDoorStatus(id,isDoorOpen);

        // if (typeof isDoorOpen !== 'boolean'){
        //     return res.status(404).json({ message: "Il tipo deve essere booleano" })
        // }

        res.status(200).json(classroom);
    }catch (err){
        console.error(err);
        res.status(500).json({ error: 'Errore nel recupero della classe' });
    }
}

module.exports = { getClassPoster, updateDoorStatus }