const asyncHandler = require("express-async-handler")
const roadAPI = require("../extern/map")

const road = asyncHandler(async (req, res) => {
    roadAPI.mapBoxAPI(function(response) {
        res.write(JSON.stringify(response))
        res.end()
    })

})

module.exports = {
    road
}