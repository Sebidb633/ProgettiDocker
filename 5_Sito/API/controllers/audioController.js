const audioService = require('../services/audioServices');

const getAllAudio = async (req,res) => {
    try {
        const audio = await audioService.getAllAudio();

        res.status(200).json(audio);
    }catch (err){
        console.error(err);
        res.status(500).json({ error: 'Errore nel recupero del audio' });
    }
}

const getAudio = async (req,res) => {
    try {
        const { id } = req.params;
        const audio = await audioService.getAudio(id);

        if (!audio){
            return res.status(404).json({ message: "Audio non trovato" })
        }

        res.status(200).json(audio);
    }catch (err){
        console.error(err);
        res.status(500).json({ error: 'Errore nel recupero del audio' });
    }
}

module.exports = { getAllAudio, getAudio }