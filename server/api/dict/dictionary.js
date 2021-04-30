const dict = require('./parser')

const Dictionary = {
  simplified: dict.simplified,
  traditional: dict.traditional,
  getCharacter(type, char) {
    return this.simplified[type][char]
  }
}

console.log(dict)
