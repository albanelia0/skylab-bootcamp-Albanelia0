
// función principal
function bingo() {

  // preguntar nombre de usuario
  var name = '';
  while (name === '' || name === 'null') {
    name = prompt('Enter your name');
  }

  var carton = {
    a:20, b:13, c:12, d:6, e:48,
    f:7, g:28, h:29, i:9, j:50,
    k:3, l:23, m:45, n:17, o:40
  };


  // mezcla aleatoriamente una arrey de valores
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
  }

  // para saber cuando el cartón esté completo
  var comprobarCarton = 0;

  //comprobar cuantos turnos se han hecho y cuántas líneas se han completado
  var countTurn = 0;
  var completedLines = 0;

  // generar bolsa de números
  var numbersBag = [];
  for (var i = 1; i <= 50; i++) {
    numbersBag.push(i);
  }
  shuffle(numbersBag);

  // - devuelve un número aleatorio del 1 al 30
  // - el número no puede repetirse
  function generateRandomNumber() {
    return numbersBag.pop();
  }


  // - genera un número aleatorio (con otra función)
  // - si el número coincide lo marca con una X
  // - vuelve a ejecutarse askTurn
  function newTurn(carton) {
    var randomNumber = generateRandomNumber();
    var linea = '';
    var lineaNueva = '';
    var maxLinea = 5;
    var contador = 0;
    var coincidencia = false;


    console.log('------ \n');
    console.log('The number for this turn is => ' + randomNumber);


    // recorrer los valores del cartón para mirar uno por uno si coincide
    for (var from in carton) {
      var cardboardValue = carton[from];
      contador++;

      // la línea acumulada antes de marcarla
      linea += carton[from];

      // marcar la casilla si coincide con el número aleatorio
      if (cardboardValue === randomNumber) {
        coincidencia = true;
        carton[from] = 'X';
        comprobarCarton += 1;
      }

      // la línea acumulada y marcada
      lineaNueva += carton[from];

      if (contador >= maxLinea) {
        // 1. comprobar si hay alguna linea completa y avisar
        if (lineaNueva === 'XXXXX' && linea !== lineaNueva) {
          completedLines++;
          console.log('You got a line! (' + completedLines + ')');
        }

        // 2. resetear línea
        contador = 0;
        linea = '';
        lineaNueva = '';
      }
    }

    if (coincidencia) {
      // cuando el número del cartón coincide con el número aleatorio de este turno
      console.log('We found a match!! Your cardboard is now => ');
    } else {
      // cuando no coincide
      console.log('What a pity! You don\'t have any match on this turn! Your cardboard remains the same.');
    }

    console.log(carton);
    countTurn++;
    askTurn();
  }

  // - comprueba si el cartón está completado
  // - pregunta si la persona quiere continuar
  // - ejecuta un nuevo turno
  function askTurn() {
    if (comprobarCarton >= 15) {

      console.log('Game completed in ' + countTurn + ' turns!');
      console.log('You won ' + name + '!');

      return;
    }

    var userDecision = confirm('Do you want to start your turn?');

    if (userDecision) {
      if (countTurn == 0){
        // muestra todos los números de tu cartón
        console.log(carton);
      }
      console.log('Next turn! \n');
      newTurn(carton);
    } else {
      // si el usuario no quiere continuar la partida saldría este mensaje.
      console.log('You stopped the game ' + name + '!');
      return;
    }
  }

  // first turn
  askTurn();

}

// START THE GAME!!
bingo();