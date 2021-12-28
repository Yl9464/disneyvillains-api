const { response } = require('express')
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

module.exports = {
  getAllVillains,
  getVillainBySlug
}
