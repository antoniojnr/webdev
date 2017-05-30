var express  = require('express')
var bodyParser  = require('body-parser')
var app = express()
var router = express.Router()

app.use(bodyParser.json())

router.use(require('./app/routes/user_routes'))

app.use('/api', router)

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = server;
