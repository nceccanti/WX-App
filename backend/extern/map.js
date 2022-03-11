const request = require('request')

let url = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=45.6794293&lon=-111.044047&cnt=3&appid="+ process.env.MAPBOX_ACCESS_TOKEN

const callMapBoxAPI = (callback) => {
    request(url, {json: true}, (err, res, body) => {
        if(err) {
            return callback(err)
        }
    return callback(body)
    })
}

module.exports.mapBoxAPI = callMapBoxAPI