const models = require('../models')

const getAllVillains = async (request, response) => {
  try {
    const villains = await models.villains.findAll()

    return response.send(villains)
  } catch (error) {
    return response.status(500).send('cannot retrieve villains')
  }
}

const getVillainBySlug = async (request, response) => {
  try {
    const { slug } = request.params
    const pickedVillain = await models.villains.findOne({ where: { slug } })

    return pickedVillain
      ? response.send(pickedVillain)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('cannot retrieve villain')
  }
}

const newVillain = async (request, response) => {
  try {
    const { name, movie, slug } = request.body

    if (!name || !movie || !slug) {
      return response.status(400).send('Missing Field')
    }

    const redVillain = await models.villains.create({ name, movie, slug })

    return response.status(201).send(redVillain)
  } catch (error) {
    return response.status(500).send('cannot save new villain')
  }
}

module.exports = {
  getAllVillains,
  getVillainBySlug,
  newVillain
}
