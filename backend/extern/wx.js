const request = require('request')


const callWXAPI = (callback, lat, lon) => {
    console.log(lat, lon)
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=` + process.env.WX_KEY
    request(url, {json: true}, (err, res, body) => {
        if(err) {
            return callback(err)
        }
    return callback(body)
    })
}

module.exports.WXAPI = callWXAPI