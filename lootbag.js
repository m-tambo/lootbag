#!/usr/bin/env node

'use strict'

const { readFile, writeFile } = require('fs')
const { argv: [,, ...args] } = process
const lootFile = './loot.json'

// const writeData = fs.writeFile()
// const readData = fs.readFile()

module.exports.getToysByKid = (kidName) => { // this function returns one thing only: a PROMISE
  return new Promise( (resolve, reject) => {
    readFile(lootFile, (err, data) => {
      if (err) return reject(err)
      let toys = JSON.parse(data).loot[kidName].toys // turn the jason data into a pojo (plain old js object)
      resolve(toys)
    })
  })
}

module.exports.addToy = (toy, kidName) => {
  return new Promise( (resolve, reject) => {
    readFile(lootFile, (err, data) => {
      if (err) {
        reject(err)
      }
      let toyData = JSON.parse(data).loot[kidName].toys

    })
    .then ()
      writeFile(lootFile, toyData, )

  })
}

module.exports.removeToy = () => {
  return 'Toy removed'
}

module.exports.getListOfKids = () => {
  return []
}

module.exports.makeKidHappy = () => {
  return true
}
