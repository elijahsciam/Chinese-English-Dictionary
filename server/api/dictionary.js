/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const fs = require('fs')
const router = require('express').Router()
const readData = require('./dict/parser')
const https = require('https')

module.exports = router
const REGEX_CHINESE = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u
const isChinese = str => REGEX_CHINESE.test(str)

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

// ChineseDictionary.prototype.find = function(word) {
//   return buildRequest(word, this.config.char_type)
// }

// const buildRequest = (word, style) => {
//  if (isChinese(word)) {
//  }
// }

function OptionObj(path) {
  const options = {}
}

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
