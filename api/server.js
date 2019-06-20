const express = require('express');

const Whatever = require('../whatever/whatevermodel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'Here I go!' });
});

server.get('/whatever', (req, res) => {
    Whatever.getAll()
    .then(whatever => {
        res.status(200).json(whatever);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

module.exports = server;