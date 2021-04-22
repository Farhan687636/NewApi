__path = process.cwd()

const express = require('express');
const app = express.Router()
const fetch = require('fetch');
const favicon = require('serve-favicon');
const creator = "@only_fxc7"

var { 
  Searchnabi,
  } = require(__path +'/functions/kisahnabi');

loghandler = {
  notquery: {
    status: false,
    code: 200,
    creator: creator,
    message: 'masukkan parameter query'
  }
}
app.use(favicon(__path +'/views/favicon.ico'));
app.get('/kisahNabi', async(req, res) => {
  const query = req.query.query;
  
  if(!query) return res.json(loghandler.notquery)
  Searchnabi(query)
  .then((data) => {
  res.json({
    message: 'suksess'
  })
  })
.catch(err => {
  res.json(err)
});
});

module.exports = app