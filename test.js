const { assert: {isTrue, equal, deepEqual} } = require('chai')
const { getToysByKid, addToy, removeToy, getListOfKids, makeKidHappy } = require('./lootbag.js')

// write tests that force us to meet all requirements

describe('lootbag', () => {
  describe('getToysByKid', () => {
    it('should return an array', () => {
      getToysByKid("billy")
      .then( (data) => {
        isTrue(Array.isArray(data))
      })
    })

    it('should contain a collection of strings', () => {
      let expected = `"drums", "sticks", "balls"`
      getToysByKid("billy")
      .then( (toyData) => {
        let result = toyData.join(", ")
        equal(result, expected)
      })
    })
  });

  describe('addToy', () => {
    it('should verify that a toy was added', () => {
      addToy("jufe", "tractor")
      .then( () => {
        return getToysByKid("jufe")
      })
      .then( (toyArray) => {
        deepEqual(["tractor"], toyArray)
      })
    })
  });

  describe('removeToy', () => {
    it('should verify that a toy was removed', () => {
      let expected = "Toy removed"
      let result = removeToy()
      equal(expected, result)
    })
  });

describe('getListOfKids', () => {
    it('should return an array', () => {
      let result = getListOfKids();
      isTrue(Array.isArray(result))
    })
  });

describe('makeKidHappy', () => {
  it('should be true', () => {
    isTrue(makeKidHappy())
  })
})

})
