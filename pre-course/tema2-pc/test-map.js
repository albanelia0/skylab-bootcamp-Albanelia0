var list = ['a', 'b', 'c', 'd'];


// recorre los elementos y devuelve una nueva array
var newList = list.map(function(item) {
  return 'Hola Alba!! Mira: ' + item;
});

console.log(newList);


// SOLO recorre los elementos
list.forEach(function(item) {
  console.log('Hola Alba!! Mira: ' + item);
});
