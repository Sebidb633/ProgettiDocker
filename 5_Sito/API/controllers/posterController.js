const posterService = require('../services/posterServices');

const getAllPoster = async (req,res) => {
    try {
        const posters = await posterService.getAllPoster();
        res.status(200).json(posters);
    }catch (err){
        console.error(err);
        res.status(500).json({ error: 'Errore nel recupero deli poster' });
    }

}

module.exports = { getAllPoster }