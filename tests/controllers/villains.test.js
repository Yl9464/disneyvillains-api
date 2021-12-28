const mocha = require('mocha')
const sinon = require('sinon')
const chai = require('chai')
const sinonChai = require('sinon-chai')
const { describe, it } = require('mocha')
const { getAllVillains, getVillainBySlug, newVillain } = require('../../controllers/villains')
const { response } = require('express')
const models = require('../../models')
const { villainsList } = require('./mocks')

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
})
