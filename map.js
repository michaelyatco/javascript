// Old function
// var numbers = [1, 2, 4, 2];
// var doubledNumbers = [];
// for (var i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }
// console.log(doubledNumbers);

// Map function
var numbers = [1, 2, 4, 2];
var doubles = numbers.map(function(x) {
  return x * 2;
});

console.log(doubles);

// Map function
var items = [
  {id: 1, body: 'foo'},
  {id: 2, body: 'bar'},
  {id: 3, body: 'foobar'}
];

var idsOnly = items.map(function(id) {
  return (id.id);
});
console.log(idsOnly);