/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const fs = require('fs')
const router = require('express').Router()
const readData = require('./dict/parser')

module.exports = router

const read = async () => {
  let dict = await fs.readFileSync(
    'server/api/dict/cedict_ts.u8',
    'utf8',
    (err, data) => {
      if (err) throw err
    }
  )
  return dict
}

const ChineseDictionary = function(obj) {
  this.config = {
    char_type: obj.character || 'simplified'
  }
}

ChineseDictionary.prototype.find = async function(word) {
  const dict = await read()
}

// const buildRequest = (options) => {
//   router.get()
// }

router.get('/', async (req, res, next) => {
  let dict = await fs.readFileSync(
    'server/api/dict/cedict_ts.u8',
    'utf8',
    (err, data) => {
      if (err) throw err
    }
  )
  dict = readData(dict)
  res.json(dict)
})
