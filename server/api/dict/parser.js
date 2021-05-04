/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const parseData = data => {
  let dict = {simplified: {}, traditional: {}}
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
      dict.traditional[traditionalChar[tChar]] = english[tChar]
    }
  }
  return dict
}

module.exports = parseData
