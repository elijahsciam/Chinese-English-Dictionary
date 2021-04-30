/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const readData = data => {
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

module.exports = readData

// const REGEX_CHINESE = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u;
// const isChinese = (str) => REGEX_CHINESE.test(str);
