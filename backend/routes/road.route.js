const express = require('express')
const router = express.Router()
const { road } = require('../controller/road.controller')

router.route('/')
.get(road)

module.exports = router