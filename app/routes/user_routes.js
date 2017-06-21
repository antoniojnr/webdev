var express = require('express')

var routes = express.Router()

routes.get('/user', function (req, res) {
  res.json({ msg: "funcionou" })
})

routes.get('/soma', function (req, res) {
  // { a: int, b: int }
  res.json({ res: req.body.a + req.body.b })
})

module.exports = routes
