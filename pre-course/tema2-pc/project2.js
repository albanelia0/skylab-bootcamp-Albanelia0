 var name = prompt('Enter your name');

if (name) {
  console.log('Welcome to Airlines ' + name + '!');
}

console.log('------');

console.log('These are the data of the flights for the whole day:\n');

var flights = [
  {id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
  {id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
  {id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
  {id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
  {id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
  {id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
  {id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
  {id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
  {id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
  {id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
];

var costSum = 0;
var last5destinations = '';

flights.forEach(function(obj) {

  // to know if the flight has scale or not
  var scaleString = '';
  if (obj.scale) {
    scaleString = ' and has scale';
  } else {
    scaleString = ' and does not make any scale';
  }

  // see this message for every flight
  console.log('The flight with origin: ' + obj.to + ', ​and destination: ' + obj.from + ' has a cost of ' + obj.cost + scaleString);
  console.log('------');

  // sum all the costs to get the average later
  costSum += obj.cost;

  // save the last 5 flights of the day
  if (obj.id > 4) {
    last5destinations += obj.from + '\n'; 
  }

});
console.log('--------------------------------');


console.log('The average cost of all flights is ' + costSum / flights.length);
console.log('------');
console.log('Destination of the last 5 flights of the day: ' + '\n' + last5destinations);

console.log('------');

console.log('Have a nice flight!');







