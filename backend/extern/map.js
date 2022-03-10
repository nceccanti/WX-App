const request = require('request')

let url = "https://api.mapbox.com/directions/v5/mapbox/driving/-111.0523435,45.657252;-110.89574530949741,45.81755251426987/?steps=true&access_token="+ process.env.MAPBOX_ACCESS_TOKEN

const callMapBoxAPI = (callback) => {
    request(url, {json: true}, (err, res, body) => {
        if(err) {
            return callback(error)
        }
    return callback(body)
    })
}

module.exports.mapBoxAPI = callMapBoxAPI