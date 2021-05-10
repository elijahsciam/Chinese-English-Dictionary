/* eslint-disable dot-notation */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const fs = require('fs')

const parseData = () => {
  let data = fs.readFileSync(
    'server/api/dict/cedict_ts.u8',
    'utf8',
    (err, data) => {
      if (err) throw err
    }
  )
  let dict = {simplified: {}, traditional: {}, english: {}}
  const lines = data.split('\n')
  const chars_pinyin_english = lines.map(line => {
    return line.split('/')
  })
  const english = chars_pinyin_english.map(word => {
    return word[1]
  })
  const char_pinyin = chars_pinyin_english.map(word => {
    return word[0]
  })
  const pinyin = char_pinyin.map(char => {
    let array = char.split('[')
    return array[1]
  })
  const simplifiedChar = char_pinyin.map(char => {
    let array = char.split(' ')
    return array[1]
  })
  const traditionalChar = char_pinyin.map(char => {
    let array = char.split(' ')

    return array[0]
  })
  for (const sChar in simplifiedChar) {
    if (sChar) {
      dict.simplified[simplifiedChar[sChar]] = {
        pinyin: pinyin[sChar],
        english: english[sChar]
      }
    }
  }
  for (const tChar in traditionalChar) {
    if (tChar) {
      dict.traditional[traditionalChar[tChar]] = {english: english[tChar]}
    }
  }
  for (const eng in english) {
    if (eng) {
      dict.english[english[eng]] = {
        simplified: simplifiedChar[eng],
        traditional: traditionalChar[eng]
      }
    }
  }
  return dict
}

module.exports = parseData
