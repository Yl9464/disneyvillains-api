const mocha = require('mocha')
const sinon = require('sinon')
const chai = require('chai')
const sinonChai = require('sinon-chai')
const { describe, it } = require('mocha')
const {getAllVillains, getVillainBySlug, newVillain} = require('../../controllers/villains')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - Villains', () => {
  describe('getAllVillains', () => {
    describe('getVillainBySlug', () => {
      describe('newVillain', () => {

      })
    })
  })
})

