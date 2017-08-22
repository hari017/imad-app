var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg'),Pool;

var config = {
    user: 'thari0016',
    database: thari0016,
    host: db-thari0016-93858,
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

function createTemplate (data) {
res.sendFile(pack.join(_dirname, 'ui', 'index.html'));
});

function hash (input)
app.get('/hash/: input', function(req,res) {
    var hashedString = hash(res.params.input);
    res.send(hashedString);
});

var pool = new Pool(config);
app.get('/test-db', function (req,res) {
    
    pool.query 
    
    