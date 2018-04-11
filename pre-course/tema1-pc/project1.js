function calculadora(num1,num2) {

  // si el primer número es un string
  if (typeof num1 === 'string') {
    return undefined;

  // si el segundo número es un string
  } else if (typeof num2 === 'string') {
    return undefined;

  // si no hay segundo número usar solo el primero
  } else if (num2 === undefined) {
    return num1 * num1;

  // si nada ha fallado... usar los 2 números
  } else {
    var suma = num1 + num2;
    var rest = num1 - num2;
    var mult = num1 * num2;
    var div = num1 / num2;
    var decimales = div.toFixed(3);
    var operation = [suma,rest,mult,decimales];
    return operation.join(', ');
  }

}

console.log(calculadora(8, 6));
console.log(calculadora(8));
console.log(calculadora(2,5));
console.log(calculadora(1,1));




