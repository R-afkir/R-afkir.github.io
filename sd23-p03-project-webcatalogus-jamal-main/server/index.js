import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
const app = express();
const port = 3000;
 
app.use(cors());
 
app.get('/ma-boxing', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/ma-b.json', function (err, data) {
        res.send(data);
    })
});
 
app.get('/ma-kickboxing', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/ma-kb.json', function (err, pdata) {
        res.send(pdata);
    })
});
 
app.get('/ma-mma', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/ma-mma.json', function (err, drdata) {
        res.send(drdata);
    })
});
 
app.get('/tennis-men', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/tm.json', function (err, data) {
        res.send(data);
    })
});
 
app.get('/tennis-women', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/tw.json', function (err, pdata) {
        res.send(pdata);
    })
});


app.get('/shirt-dsl', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/shrt-dsl.json', function (err, pdata) {
        res.send(pdata);
    })
});

app.get('/shirt-ck', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/shrt-ck.json', function (err, pdata) {
        res.send(pdata);
    })
});

app.get('/shirt-ea', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/shrt-ea.json', function (err, pdata) {
        res.send(pdata);
    })
});

app.get('/swtr-th', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/swtr-th.json', function (err, pdata) {
        res.send(pdata);
    })
});

app.get('/shoe-pma', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/shoe-pma.json', function (err, pdata) {
        res.send(pdata);
    })
});

app.get('/shoe-nk', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/shoe-nk.json', function (err, pdata) {
        res.send(pdata);
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
 
});


