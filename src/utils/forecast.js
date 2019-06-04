const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/970d8220909f0aeb53f271c8b1905f5c/' + latitude + ',' + longitude + '?units=us&lang=sv'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' Det är ' + body.currently.temperature + ' grader ute. Högsta tempratur idag är ' + body.daily.data[0].temperatureHigh + ' och lägsta är ' + body.daily.data[0].temperatureLow + '. Chansen att det blir regn är ' + body.currently.precipProbability + ' %')
        }
    })
}

module.exports = forecast
