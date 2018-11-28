  const request = require('request');

 var geocodeAddress = (address)=>{
    return new Promise((resolve, reject)=>{
      var encodedAddress = encodeURIComponent(address);

      request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAMYl7AidQ6dxPe2YKC4OxfIHV2q_qSpKM`,
      json: true
      },(err,res,body)=>{
       if(err){
         reject('Unable to connect to google servers.');
       }else if(body.status === 'ZERO_RESULTS'){
         reject('Unable to connect to address');
       }else if(body.status === 'OK'){
         resolve({
           Address: body.results[0].formatted_address,
           Latitude: body.results[0].geometry.location.lat,
           Longitude: body.results[0].geometry.location.lng
         });
       }

      });
   });
 };

 geocodeAddress('273006').then((location)=>{
   console.log(JSON.stringify(location, undefined, 2));
 }, (errorMessage)=>{
   console.log(errorMessage);
 });
