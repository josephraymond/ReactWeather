// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Las Vegas', function (err, temp) {
//   if (err) {
//     console.log('Error', err);
//   } else {
//     console.log('Success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout( function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Las Vegas').then(function (temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('Promise error', err);
// });

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('A and B need to be numbers');
    }
  });
}

addPromise(3, 'hey').then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});
