 const yargs = require('yargs');
 const geocode = require('./geocode/geocode.js');
 const weather = require('./weather/weather.js');

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

    geocode.geocodeAddress(argv.a, (errMsg, results)=>{
       if(errMsg){
         console.log(errMsg);
       }else{
         console.log(results.Address);
         weather.getWeather(results.Latitude, results.Longitude, (errorMessage, weatherResults)=>{
           if(errorMessage)
             console.log('errorMessage');
           else {
             console.log(`It's currently ${weatherResults.temperature} but it feels like ${weatherResults.apparentTemperature}`);
           }
         });

       }
    });

    //b9de51241cc1d92fa9e19c79ad10d2b2
