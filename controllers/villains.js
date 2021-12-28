const models = require('../models')

const getAllVillains = async (request, response) => {
  const villains = await models.villains.findAll()

  return response.send(villains)
}

const getVillainBySlug = async (request, response) => {
  const { slug } = request.params
  const pickedVillain = await models.villains.findOne({ where: { slug } })

  return pickedVillain
    ? response.send(pickedVillain)
    : response.sendStatus(404)
}

const newVillain = async (request, response) => {
  const { name, movie, slug } = request.body

  if (!name || !movie || !slug) {
    return response.status(400).send('Missing Field')
  }

  const redVillain = await models.villains.create({ name, movie, slug })

  return response.status(201).send(redVillain)
}

module.exports = {
  getAllVillains,
  getVillainBySlug,
  newVillain
}
