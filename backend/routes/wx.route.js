const express = require('express')
const router = express.Router()
const { wx } = require('../controller/wx.controller')

router.route('/:lat/:lon')
.get(wx)

module.exports = router