/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const fs = require('fs');
const parseData = require('./dict/parser');
const https = require('https');
const got = require('got');

const REGEX_CHINESE = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u;
const isChinese = (str) => REGEX_CHINESE.test(str);

const endpoint =
  'https://raw.githubusercontent.com/elijahsciam/Chinese-English-Dictionary/npm/dict/cedict_ts.u8';
var dictionary;

const buildRequest = async (word, style, language) => {
  https
    .request(endpoint, (res) => {
      res.setEncoding('utf8');
      res.on('data', (d) => {
        dictionary += d;
      });
    })
    .end();
  if (dictionary) {
    dictionary = parseData(dictionary);
    if (language === 'chinese') {
      if (style === 'simplified') {
        const pinyin = dictionary[style][word].pinyin.split(']');
        const english = dictionary[style][word].english;
        return { pinyin: pinyin[0].toString(), english };
      } else {
        const english = dictionary[style][word].english;
        return { english: english };
      }
    }
  }
};

const ChineseDictionary = function (obj) {
  this.config = {
    char_type: obj.char_type || 'simplified',
  };
};

ChineseDictionary.prototype.find = function (word) {
  if (isChinese(word)) {
    return buildRequest(word, this.config.char_type, 'chinese');
  } else {
    return buildRequest(word, this.config.char_type, 'english');
  }
};

const hi = new ChineseDictionary({ char_type: 'traditional' });

console.log(hi.find('龍燈'));

module.exports = ChineseDictionary;
