/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const fs = require('fs')
const parseData = require('./dict/parser')

const REGEX_CHINESE = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u
const isChinese = str => REGEX_CHINESE.test(str)

const buildRequest = (word, style, language) => {
  let dict = fs.readFileSync(
    'server/api/dict/cedict_ts.u8',
    'utf8',
    (err, data) => {
      if (err) throw err
    }
  )

  const dictionary = parseData(dict)

  if (language === 'chinese') {
    if (style === 'simplified') {
      const pinyin = dictionary[style][word].pinyin.split(']')
      const english = dictionary[style][word].english
      return {pinyin: pinyin[0].toString(), english}
    } else {
      const english = dictionary[style][word].english
      return {english: english}
    }
  } else {
    return dictionary.english[word]
  }
}

const ChineseDictionary = function(obj) {
  this.config = {
    char_type: obj ? obj.char_type : 'simplified'
  }
}

ChineseDictionary.prototype.translate = function(word) {
  if (isChinese(word)) {
    return buildRequest(word, this.config.char_type, 'chinese')
  } else {
    return buildRequest(word, this.config.char_type, 'english')
  }
}

module.exports = ChineseDictionary
