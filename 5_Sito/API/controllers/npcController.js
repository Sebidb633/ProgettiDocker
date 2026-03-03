const npcService = require('../services/npcServices');

const getAllNpcDescription = async (req,res) => {
    try {
        const npc = await npcService.getAllNpcDescription();
        res.status(200).json(npc);
    }catch (err){
        console.error(err);
        res.status(500).json({ error: 'Errore nel recupero degli NPC' });
    }

}

const getNpcDescription = async (req,res) => {
    try {
        const { id } = req.params;
        const npc = await npcService.getNpcDescription(id);

        if (!npc){
            return res.status(404).json({ message: "NPC non trovato" })
        }

        res.status(200).json(npc);
    }catch (err){
        console.error(err);
        res.status(500).json({ error: 'Errore nel recupero del NPC' });
    }

}


module.exports = { getAllNpcDescription, getNpcDescription }