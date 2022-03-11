const asyncHandler = require("express-async-handler")
const wxAPI = require("../extern/wx")

const wx = asyncHandler(async (req, res) => {
    wxAPI.WXAPI(function(response) {
        res.write(JSON.stringify(response))
        res.end()
    }, req.params.lat, req.params.lon)

})

module.exports = {
    wx
}