function testArguments() {
  // convertir arguments en array
  var args = Array.prototype.slice.call(arguments);

  console.log(args);
}

testArguments(1, 2, 3, 4, 5, 6);


function serieFibonacci(limite) {
  // iniciar array con primeros valores
  var fibonacci = [0,1];

  // agregar nuevo número hasta llegar al límite
  for (var i = 0; i <= limite-2; i++) {
    // obtener el último número conseguido hasta ahora
    var ultimoNumero = i;

    // obtener el penúltimo número conseguido hasta ahora
    var penultimoNumero = i-1;

    // calcular la suma de ambos y añadir el resultado como nuevo número
    var nuevoNumero = ultimoNumero + penultimoNumero;
    

    // mostrar
    console.log(nuevoNumero);
    
  }
}

serieFibonacci(30);