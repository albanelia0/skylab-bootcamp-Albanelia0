var arrayNombre = ['Alba', 'Martes'];
var fullNombre = arrayNombre.join(' '); // 'Alba Martes'

var contador = {};

for (var i = 0; i < fullNombre.length; i++) {
  var letra = fullNombre[i].toLowerCase();

  if (contador[letra] === undefined) {
    contador[letra] = 0;
  }

  contador[letra]++;
  
}

console.log(contador);

// bucle FOR-IN
for (var letra in contador) {
  if (contador[letra] > 1) {  
    console.log('Alba Martes, the letter ' + letra + ' => ' + contador[letra] + ' times.');
  }
}