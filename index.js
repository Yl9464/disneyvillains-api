const express = require('express')
const bodyParser = require('body-parser')
const { getAllVillains, getVillainBySlug, newVillain } = require('./controllers/villains')

const app = express()

app.get('/villains', getAllVillains)

app.get('/villains/:slug', getVillainBySlug)

app.post('/villains', bodyParser.json(), newVillain)

app.listen(1362)
