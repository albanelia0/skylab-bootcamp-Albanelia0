
// memoria de la calculadora
var previousNumber = 0;
var selectedOperation = 'N/A';
var reset = false;

// setear pantalla a 0
document.getElementById('screen').value = 0;


function addNumber(digit) {

  if (reset) {
    document.getElementById('screen').value = '';
    reset = false;
  }

  if (document.getElementById('screen').value == '0') {
    document.getElementById('screen').value = '';
  }


  // cuando se pulsa la tecla punto...
  if (digit === '.') {
    // y YA HAY un punto en screen...
    if (document.getElementById('screen').value.indexOf('.') !== -1) {
      // parar la función para impedir que se añada una segunda coma
      return;
    }
  }

  // finalmente añadir dígito a la pantalla
  document.getElementById('screen').value += digit;
}


function startOperation(operation) {

  // iniciar una operación también resuelve la anterior
  calculateResult();

  previousNumber = document.getElementById('screen').value;
  selectedOperation = operation;
}

function deleteScreen() {
  document.getElementById('screen').value = 0;
  previousNumber = 0;
  selectedOperation = 'N/A';
}

function multNumber() {
  startOperation('*');
}

function sumNumber() {
  startOperation('+');
}
function restNumber(){
  startOperation('-');
}
function divNumber() {
  startOperation('/');
}

function calculateResult() {
  var result = 0;

  // el num1 es el que se guardó antes
  var num1 = parseFloat(previousNumber);

  // el num2 es lo que ahora hay en pantalla
  var num2 = parseFloat(document.getElementById('screen').value);

  // decidir la operación que se va a hacer
  switch (selectedOperation) {
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case 'N/A':
      result = num2;
      break;
  }

  // actualizar pantalla
  document.getElementById('screen').value = result;

  // el número actual no se mantendrá en pantalla al empezar
  // a escribir otro
  reset = true;
  selectedOperation = 'N/A';
}












