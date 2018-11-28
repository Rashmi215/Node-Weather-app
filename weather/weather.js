 const request = require('request');

 var getWeather = (latitude, longitude, callback) =>{
  request({
    url: `https://api.darksky.net/forecast/b9de51241cc1d92fa9e19c79ad10d2b2/${latitude}, ${longitude}`,
    json: true
   },(error, response, body)=>{
     if(!error && response.statusCode == 200){
       callback(undefined, {
         temperature : body.currently.temperature,
         apparentTemperature : body.currently.apparentTemperature
       });
     }else{
       callback('Unable to fetch weather');
     }

    });
  }

  module.exports.getWeather = getWeather;
