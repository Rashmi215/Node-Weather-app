const request = require('request');

module.exports.geocodeAddress = (address , callback)=>{
  var encodedAddress = encodeURIComponent(address);

  request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAMYl7AidQ6dxPe2YKC4OxfIHV2q_qSpKM`,
  json: true
  },(err,res,body)=>{
   if(err){
     callback('Unable to connect to google servers.');
   }else if(body.status === 'ZERO_RESULTS'){
     callback('Unable to connect to address');
   }else if(body.status === 'OK'){
     callback(undefined, {
       Address: body.results[0].formatted_address,
       Latitude: body.results[0].geometry.location.lat,
       Longitude: body.results[0].geometry.location.lng
     });
   }

   });

 };
