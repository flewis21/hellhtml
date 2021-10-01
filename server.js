const express = require('express')
const app = express()
const ejs = require('ejs')

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('pages/index')
})

app.get('/', function (req, res) {
  res.render('pages/about')
})

module.exports = app
