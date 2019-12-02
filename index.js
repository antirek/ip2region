const sypex = require('sypexgeo-vyvid');
const config = require('config');
const express = require('express');
const path = require('path');

const geoDb = new sypex.Geo(
    path.resolve(config.get('dataFolder'), config.get('dataFile')));

const app = express();

app.use('/define/:ip', (req, res) => {
    const ip = req.params.ip;
    const location = geoDb.find(ip);
    console.log('ip', ip, 'location', location);

    res.json(location);
})

app.listen(config.get('port'), () => {
    console.log('start with config', config);
});