const asyncHandler = require("express-async-handler")
const wxAPI = require("../extern/map")

const getWX = asyncHandler(async (req, res) => {
    wxAPI.mapBoxAPI(function(response) {
        res.write(JSON.stringify(response))
        res.end()
    })

})

module.exports = {
    getWX
}