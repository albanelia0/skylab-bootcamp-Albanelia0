
var carton = {
  a:20, b:13, c:12, d:6, e:8,
  f:7, g:28, h:29, i:9, j:22,
  k:3, l:23, m:15, n:17, o:30
};

function generateRandomNumber() {
  return Math.floor((Math.random() * 30) + 1);
}

var comprobarCarton;
function newTurn(carton) {


  var linea = '';
  var maxLinea = 5;
  var contador = 0;

  var randomNumber = generateRandomNumber();
  
  for (var from in carton) {
    var recorrer = carton[from];
    contador++;
    linea += carton[from];
    
    // printa el número random
    console.log(randomNumber);
    console.log(recorrer);
    console.log('------');

    if (recorrer === randomNumber) {
      carton[from] = 'X';
      comprobarCarton += 1;
      if (contador >= maxLinea) {

        // 1. comprobar si está completa y avisar
        if (linea === 'XXXXX') {
          console.log('Línea!');
        }

        // 2. resetear línea
        contador = 0;
        linea = '';
      }

      /*}else if (recorrer === 'X') {
        generateRandomNumber() = 'PONER ALGO PARA QUE NO SE REPITA';*/

    }
  }

  console.log(carton);
  console.log('Siguiente turno! \n');
    
}


newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);
newTurn(carton);

