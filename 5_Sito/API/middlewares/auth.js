const checkAuth = (req,res,next) => {
    const userToken = req.headers['x-api-key'];

    if (userToken && userToken === process.env.API_TOKEN){
        next();
    } else {
        res.status(401).json({ error: "Accesso negato: token non valido o mancante" })
    }
}

module.exports = { checkAuth }