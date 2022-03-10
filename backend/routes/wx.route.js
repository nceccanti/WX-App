const express = require('express')
const router = express.Router()
const { getWX } = require('../controller/wx.controller')

router.route('/')
.get(getWX)

module.exports = router