
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof a === 'number' && typeof b === 'number') {
          resolve(a + b);
        } else {
          reject('Not numbers');
        }
      }, 1500);
    });
};

var somePromise = new Promise((resolve, reject) => {

  resolve('Hey, it worked!');
});

somePromise.then((message) => {
  console.log('Success');
}, (errorMessage) => {
  console.log('Failure');
});


asyncAdd(4,5).then((number) => {
  console.log(number);
}, (errorMessage) => {
  console.log(errorMessage);
});
