const statisticService = require('../services/statisticServices');

const getAllStatistics = async (req,res) => {
    try {
        const statistics = await statisticService.getAllStatistics();

        res.status(200).json(statistics);
    }catch (err){
        console.error(err);
        res.status(500).json({ error: 'Errore nel recupero delle statistiche' });
    }

}

const insertNewStatistic = async (req,res) => {
    try{
        const {
            developer_percent,
            system_engineers_percent,
            daily_player,
            classroom_visited,
            visiting_time,
            subject_id,
        } = req.body

        const newStat = await statisticService.insertNewStatistic({
            developer_percent: parseFloat(developer_percent),
            system_engineers_percent: parseFloat(system_engineers_percent),
            daily_player: parseInt(daily_player),
            classroom_visited: parseInt(classroom_visited),
            visiting_time: visiting_time,
            subject_id: subject_id,
        })
        res.status(200).json(newStat);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Errore nell\'inserimento delle statistiche ' + err });
    }
}

const updateStatistic = async (req,res) => {
    try{
        const { id } = req.params;
        const body = req.body;
        const updateData = {};

        if (body.developer_percent !== undefined) updateData.developer_percent = parseFloat(body.developer_percent);
        if (body.system_engineers_percent !== undefined) updateData.system_engineers_percent = parseFloat(body.system_engineers_percent);
        if (body.daily_player !== undefined) updateData.daily_player = parseInt(body.daily_player);
        if (body.classroom_visited !== undefined) updateData.classroom_visited = parseInt(body.classroom_visited);
        if (body.visiting_time !== undefined) updateData.visiting_time = body.visiting_time;
        if (body.subject_id !== undefined) updateData.subject_id = parseInt(body.subject_id);

        const updatedStat = await statisticService.updateStatistics(updateData, id);
        res.status(200).json(updatedStat);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Errore nell\'update delle statistiche ' + err });
    }
}

module.exports = { getAllStatistics,insertNewStatistic, updateStatistic}