console.log('Starting app');
setTimeout(()=>{
  console.log('Inside of callback');
},100);
setTimeout(()=>{
  console.log('another callback');
},0);
console.log('Finishing app');
