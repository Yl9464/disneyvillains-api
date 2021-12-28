const mocha = require('mocha')
const sinon = require('sinon')
const chai = require('chai')
const sinonChai = require('sinon-chai')
const { describe, it } = require('mocha')
const { getAllVillains, getVillainBySlug, newVillain } = require('../../controllers/villains')
const { response } = require('express')
const models = require('../../models')
const { villainsList, singleVillain } = require('./mocks')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - Villains', () => {
  describe('getAllVillains', () => {
    it('retrieve a list of villians from the db and call response.send with that list', async () => {
      const stubbedFindAll = sinon.stub(models.villains, 'findAll').returns(villainsList) // substitue for the real findAll(). First param name of file being called and second param is the function being stubbed
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      await getAllVillains({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(villainsList)
    })
  })
  describe('getVillainBySlug', () => {
    it('retrieve single villian associated with provided slug from db and calls the response.send', async () => {
      const stubbedFindOne = sinon.stub(models.villains, 'findOne').returns(singleVillain)
      const request = { params: { slug: 'captain-hook' } }
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      await getVillainBySlug(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { slug: 'captain-hook' } })
      expect(stubbedSend).to.have.been.calledWith(singleVillain)
    })
  })
})
