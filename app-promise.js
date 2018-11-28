 const axios = require('axios');
 const yargs = require('yargs');

 const argv = yargs
           .option({
             a:{
               demand:true,
               alias: 'address',
               describe: 'Address to fetch weather'
             }
           })
            .help()
            .alias('help', 'h')
            .argv;

  var encodedAddress = encodeURIComponent(argv.address);
  var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAiifK6-AmHja5iPdWmjJSWuGVD2003z78`;

  axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
      throw new Error('Unable to fetch data');
    }
    var latitude = response.data.results[0].geometry.location.lat;
    var longitude = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/b9de51241cc1d92fa9e19c79ad10d2b2/${latitude}, ${longitude}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  }).then((response)=>{
       var temperature = response.data.currently.temperature;
       var apparentTemperature = response.data.currently.apparentTemperature;
       console.log(`It's currently ${temperature} but it feels like ${apparentTemperature}`);
  }).catch((e)=>{
      if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API server');
      }else {
        console.log(e.message);
      }
  })
