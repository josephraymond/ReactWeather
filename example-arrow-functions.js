// var names = ['Joey', 'Ryan', 'Scott'];

// ES5 Function
// names.forEach(function (name) {
//   console.log('forEach', name);
// });

// Multiple Line Style Arrow Function ES6
// Statement
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// })

// Single Line Style Arrow Function ES6
// Expression
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Joey'));

// var person = {
//   name: 'Joey',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
// person.greet();

// Test ES5 Statement
function add (a, b) {
  return a + b;
}
console.log(add(1, 3));

// Test Expression
var addExpression = (a, b) => a + b;
console.log(addExpression(4, 4));

// Test Statement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(1, 2));
