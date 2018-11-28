  var asyncAdd = (a, b) =>{
    return new Promise((resolve, reject) =>{
       setTimeout(()=>{
         if(typeof a === 'number' && typeof b ===  'number'){
           resolve(a+b);
         }else {
           reject('Numbers are only valid');
         }
       },2000);
    });
  };

  asyncAdd(5, '8').then((res)=>{
    console.log('Sum:',res);
    return asyncAdd(res,88);
  }).then((res)=>{
     console.log(res);
  }).catch((error)=>{
    console.log(error);
  });

  // var somePromise = new Promise((resolve, reject)=>{
  //   setTimeout(()=>{
  //     //resolve('It worked');
  //     reject('It did not worked');
  //   },2500);
  // });
  //
  // somePromise.then((message)=>{
  //   console.log('Success: ',message);
  // }, (errorMessage)=>{
  //   console.log('Error: ',errorMessage);
  // });
