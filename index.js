const express = require('express')
const { getAllVillains, getVillainBySlug } = require('./controllers/villains')

const app = express()

app.get('/villains', getAllVillains)

app.get('/villains/:slug', getVillainBySlug)
app.listen(1362, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1362...')
})
