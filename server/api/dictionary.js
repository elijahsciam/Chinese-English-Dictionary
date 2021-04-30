const fs = require('fs')
const router = require('express').Router()
const readData = require('./dict/parser')

module.exports = router

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
