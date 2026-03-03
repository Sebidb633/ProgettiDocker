const express = require('express');
const router = require('./routes/routes');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname,'uploads')));

app.use('/api', router);

app.listen(4000, () => {
    console.log('API attiva sulla porta 4000')
});