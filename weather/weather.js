const request = require('request');

var getWeather = (lat, long, callback)=>{
    request({
        url: `https://api.darksky.net/forecast/d4e75d51759d29ab20eac015209c2574/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.code !== 400) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }

    });
};

module.exports.getWeather = getWeather;