const express = require('express')
const { getAllVillains } = require('./controllers/villains')

const app = express()

app.get('/villains', getAllVillains)

app.listen(1362, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1362...')
})
