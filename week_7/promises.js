const myPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('success')
    }, 500)
 });
 myPromise.then(function(value){
console.log(value);
 })