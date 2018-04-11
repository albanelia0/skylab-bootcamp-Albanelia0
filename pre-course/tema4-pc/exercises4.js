function argumentsInArray() {
  // convertir arguments en array
  var args = Array.prototype.slice.call(arguments);

  console.log(args);
}

argumentsInArray(1, 2, 3, 4, 5, 6);


/* a) Escribe una funcion en la que, declarando una array con 
los numeros del 1 al 9, muestres por pantalla los numeros unidos
 por parejas (1-2, 2-3, 3-4...), 
además, cada elemento de la pareja deberá estar multiplicada por 2. */


function numberMultiplicate() {
  var array = [1,2,3,4,5,6,7,8,9];
  for (var i = 0; i < array.length-1; i++) {
    var pairs = [array[i]*2, array[i+1]*2];
    console.log(pairs.join(' - '));
    //console.log(array[i]*2 + ' - ' + array[i+1]*2);
  }
}



//a1) La funcion debería aceptar la array a tratar como argumento.
function numberMultiplicate() {
  var numbers = Array.prototype.slice.call(arguments);
 
  for (var i = 0; i < numbers.length-1; i++) {
    var pairs = [numbers[i]*2, numbers[i+1]*2];
    console.log(pairs.join(' - '));
    //console.log(numbers[i]*2 + ' - ' + numbers[i+1]*2);
  }
}

numberMultiplicate(1,2,3,4,5,6,7,8,9);

// a2) Pasa también el numero a multiplicar a la función como argumento
console.log('----------');



function passNumberMultiplicate() {
  var numbers = Array.prototype.slice.call(arguments);
  var multiplicar = numbers.pop();

  console.log('El número escogido es ' + multiplicar);
 
  for (var i = 0; i < numbers.length-1; i++) {
    var pairs = [numbers[i]*multiplicar, numbers[i+1]*multiplicar];
    console.log(pairs.join(' - '));
    //console.log(numbers[i]*multiplicar + ' - ' + numbers[i+1]*multiplicar);
  }
}

passNumberMultiplicate(1,2,3,4,5,6,7,8,9,12);

// a3) La función debería ser capaz de recibir el 
//numero de parejas que queremos devolver del total.


function passNumberMultiplicateAndDelimited() {
  var numbers = Array.prototype.slice.call(arguments);
  var delimitador = numbers.pop();
  var multiplicar = numbers.pop();

  console.log('El número escogido es ' + multiplicar);
  var numero = 0;
 
  for (var i = 0; i < numbers.length-1; i++) {
    numero++

    
    if (i >= delimitador) {
      break;
    }

    var pairs = [numbers[i]*multiplicar, numbers[i+1]*multiplicar];
    console.log(numero + 'ª' +  ' pareja: ' + pairs.join(' - '));
  }
}

passNumberMultiplicateAndDelimited(1,2,3,4,5,6,7,8,9,12,3);

// b) Volvemos a los numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?

console.log('---------------');




function serieFibonacci(limite) {
  var fib = [];
  var x = 0;
  var y = 1;

  fib.push(x);
  fib.push(y);
 
  while(fib.length < limite){
    fib.push(fib[y] + fib[x]);
    y++;
    x++;
  }

  
  console.log(fib)

}

serieFibonacci(10);

console.log('-------------');

function serieFib(lim) {
  var arr = [];
  var x = 0;
  var y = 1;

  arr.push(x);
  arr.push(y);

  for (var i = 0; i <= lim-1; i++) {
    arr.push(arr[y] + arr[x]);
    x++;
    y++;
  }
  console.log(arr);
}


serieFib(10);

// b2) Puedes añadir además, la posición de cada resultado?
 console.log('-----------');

function serieFibo(lim) {
  var arr = [];
  var x = 0;
  var y = 1;
  var position = 0;

  arr.push(x);
  arr.push(y);

  for (var i = 0; i <= lim-1; i++) {
    arr.push(arr[y] + arr[x]);
    x++;
    y++;

    console.log(arr[i] + ' the position is: ' + i);
    
  }
  
}



serieFibo(10);

// b3) Ahora, inserta los resultados en una array
// y muestralos todos juntos de una manera amigable.

function serieFibona(lim) {
  var arr = [];
  var x = 0;
  var y = 1;
  var arrayAndPosition=[];


  arr.push(x);
  arr.push(y);

  for (var i = 0; i <= lim-1; i++) {
    arr.push(arr[y] + arr[x]);
    x++;
    y++;
    
    var numberAndPosition = {
      number: arr[i], position: i
    };

    arrayAndPosition.push(numberAndPosition);
    
  }
  console.log(arrayAndPosition);

  arrayAndPosition.forEach(function(numberAndPosition) {
    console.log(numberAndPosition.number + ' the position is: ' + numberAndPosition.position);

  });
  
}



serieFibona(10);

console.log('--------------');

//b5) Ahora, muestra los resultados en forma piramidal:

function fibO(limit){
  // required vars
  var numbers = [];
  var x = 0;
  var y = 1;

  // insert first two numbers
  numbers.push(x);
  numbers.push(y);

  // generate the rest of the fibonacci numbers
  for (var i = 0; i <= limit - 2; i++) {
    numbers.push(numbers[y] + numbers[x]);
    x++;
    y++;
  }

  // show the first half of the pyramid, all the numbers from the array
  var pyramidString = '';
  numbers.forEach(function (number){
    pyramidString += number + ' ';
    console.log(pyramidString);
  });

  // show the second half of the pyramid
  for (var i = 0; i < limit; i++) {
    numbers.pop();
    console.log(numbers.join(' '));
  }

}

fibO(7);

console.log('------------');

function isma(limite) {
 var numbers = [0,1,2,3,4,5,6,7,8];
 var piramide = '';
 numbers.forEach(function (num) {
  piramide += num + ' ';
  console.log(piramide);

 });

 for (var i = 0; i < limite; i++) {
   numbers.pop();
   console.log(numbers.join(' '));
 }

}

isma(8);

/* c) Simple Scripting program. Crea un programa que transforme 
un número de 4 dígitos en otro diferente con las
 posiciones de los dígitos cambiadas, creandio un nuevo código */

console.log('--------------');

 

function changePositionNumber(number) {
  var nuevoNumero = number;
  nuevoNumero = nuevoNumero.toString();
  var array = nuevoNumero.split('');
  var deleted = array.shift();
  array.push(deleted);
   return array.join('');  
}
console.log(changePositionNumber(9836));


console.log('-------------');

/*c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados 
(Los dos códigos se deberían encriptar en la misma función) */

function numberEncrypting(number1,number2) {

  console.log(changePositionNumber(number1));
  console.log(changePositionNumber(number2));
  
}

numberEncrypting(1234,9032);

console.log('-------------');

/* c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar
 la posición de los dígitos, multiplicaremos a cada miembro por un numero 
 cuya multiplicación no sea superior a 10.
 (Si es superior a 10, conseguiremos una multplicación
  de dos digitos y el código ya no sería de 4 valores) */

function levelMoreEncrypting(number) {
  var numberAndPositionChanged = changePositionNumber(number);
  var numberPassToArray = numberAndPositionChanged.split('');
  var numberMultiplicated = numberPassToArray.map(function (number) {
    var multiplicador = 2;
    return multiplicador * number;
  });

  return numberMultiplicated;
}
console.log(levelMoreEncrypting(1234));

console.log('----------------');

/*c4) Ahora, implementa en otra funcion aparte el decrypter(),
 que recibirá como argumento un código encriptado 
 (y correspondientemente multiplicado en el apartado c3) 
 y nos devuelva el código desencriptado.*/




function theGreatFather(n1){
  var numbers = n1.toString().split('');
  var deleted = numbers.pop();
  numbers.unshift(deleted);
  var valorOriginal = numbers.map(function (num) {
    return num/2;
  });
  
  return valorOriginal.join('');


}

console.log(theGreatFather(4682));

console.log('----------------');

/* c6) El usuario podrá solo introducir letras, 
cada número del 0 al 9 corresponderá a varias letras.
Podéis seguir este esquema.*/


function theGreatFather2(str){

  var dictionary = {
      0: ['A', 'K', 'T', 'F', 'O', 'Y'],
      1: ['B', 'L', 'U', 'G', 'P', 'Z'],
      2: ['C', 'M', 'V', 'H', 'Q', '.'],
      3: ['D', 'N', 'W', 'I', 'R', ','],
      4: ['E', 'Ñ', 'X', 'J', 'S', ' ']
  }

  var code = []
  for(var key in dictionary){
    dictionary[key].forEach(function(letter){
      for (var i = 0; i < str.length; i++) {
      
        if(letter === str[i].toUpperCase()){
          code.push(key);
        }
      }
      
    });
  }
  return code;



}

console.log(theGreatFather2('isma'));








console.log('----------------');
/*d) Crea un programa que use la encriptacion Romana, como es?
 Si tenemos la palabra SKYLAB, la palabra encriptada será SLKAYB.
  Si divides la palabra original en 2 grupos obtienes:*/


function encryptSkylab(str) {
  var part1 = [];
  var part2 = [];
  var newArray = [];

  for(var i = 0; i<str.length;i++) {
    if(i<3) {
      part1.push(str[i]);
    } else {
      part2.push(str[i]);
    }
  }

  for (var i = 0; i < part1.length; i++) {
    newArray.push(part1[i]);
    newArray.push(part2[i]);
  }
  console.log(newArray.join(''));
  

}

encryptSkylab('Skylab');

console.log('----------------');
/* d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.

Hint: for decrypt, only catch the pair words like: S L K A Y B ,
 then, you get SKY, the next step is catch the odd words, S L K A Y B,
 group the two groups and you get the original word.*/


function desencriptarFunction(str) {
  var part1 = [];
  var part2 = [];
  var newArray = [];
  var num = 0;

  for(var i=0; i < str.length; i++) {
    if (i == 0| i == 2| i == 4) {
      part1.push(str[i]);
    } else {
      part2.push(str[i]);
    }
  }

  for (var i = 0; i < str.length; i++) {
    if (i < 3) {
      newArray.push(part1[i]);
    } else {
      newArray.push(part2[num]);
      num++;
    }
  }
  
  console.log(newArray.join(''));
  

}
desencriptarFunction('Slkayb');

console.log('----------------');
/* d3) Agrupa la función Encrypt y decrypt en una unica función,
 de forma que introduzcas como parámetro SKYLAB y devuelva SKYLAB 
 (con todas las transformaciones internas hechas y mostrando, 
 entre medias, la transformación)*/


function encryptAndDecrypt(str) {
  var part1 = [];
  var part2 = [];
  var newArray = [];
  var decr1 = [];
  var decr2 = [];
  var newDecr = [];
  var num = 0;
for (var i = 0; i < str.length; i++) {
  if (i < 3) {
    part1.push(str[i]);
  }else {
    part2.push(str[i]);
  }
  
}
for (var i = 0; i < part1.length; i++) {
  newArray.push(part1[i]);
  newArray.push(part2[i]);
}

var newString = newArray.join('');
console.log('This string is encrypted: ' + newString);

for (var i = 0; i < str.length; i++) {
  if (i == 0| i==2 | i==4) {
    decr1.push(newString[i]);
  } else {
    decr2.push(newString[i]);
  }
}
for (var i = 0; i < str.length; i++) {
  if (i<3) {
    newDecr.push(decr1[i]);
  }else {
    newDecr.push(decr2[num]);
    num++;
  }
}

console.log('This string is decrypted ' + newDecr.join(''));

}
encryptAndDecrypt('Skylab');

console.log('----------------');
/* d4) Lo tienes? Prueba ahora con SKYLABCODERS.
 Cambia la función para que pueda aceptar palabras más largas.*/


function encryptAndDecrypted(str) {
  var part1 = [];
  var part2 = [];
  var newArray = [];
  var decr1 = [];
  var decr2 = [];
  var newDecr = [];
  var num = 0;
for (var i = 0; i < str.length; i++) {
  if (i < 6) {
    part1.push(str[i]);
  }else {
    part2.push(str[i]);
  }
  
}
for (var i = 0; i < part1.length; i++) {
  newArray.push(part1[i]);
  newArray.push(part2[i]);
}

var newString = newArray.join('');
console.log('This string is encrypted: ' + newString);

for (var i = 0; i < str.length; i++) {
  if (i == 0| i==2 | i==4 | i==6 | i== 8 | i==10) {
    decr1.push(newString[i]);
  } else {
    decr2.push(newString[i]);
  }
}
for (var i = 0; i < str.length; i++) {
  if (i<6) {
    newDecr.push(decr1[i]);
  }else {
    newDecr.push(decr2[num]);
    num++;
  }
}

console.log('This string is decrypted ' + newDecr.join(''));

}
encryptAndDecrypted('SKYLABCODERS');

console.log('--Programa--------------');
/* e) Crea un programa al que le introduces un número como parámetro 
del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:

sayItWithWords(5) => //output Five
sayItWithWords(23) => //output twenty-three
sayItWithWords(71) => //output seventy-one*/

function numberPassToAlphabet(number){
  var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  for (var i = 0; i < 10; i++) {
    if (i < 10 && number == i) {
      return units[i];
    }
  }
  for (var i = 0; i < 10; i++) {
    var index = i+10;
    
    if (i < 20 && number == index) {
      return teens[i];
    }
    
  }
  for (var i = 0; i < 10; i++) {
  var index = i*10;
  
    if (i < 100 && number == index) {
      return tens[i];
    }
  
  }

  var objeto = {
    21:'twenty-one', 22:'twenty-two',23:'twenty-three',24:'twenty-four',25:'twenty-five',26:'twenty-six',
    27:'twenty-seven',28:'twenty-eight',29:'twenty-nine',31:'thirty-one',32:'thirty-two',33:'thirty-three',
    34:'thirty-four',35:'thirty-five',36:'thirty-six',37:'thirty-seven',38:'thirty-eight',39:'thirty-nine',
    41:'forty-one',42:'forty-two',43:'forty-three',44:'forty-four',45:'forty-five',46:'forty-six',
    47:'forty-seven',48:'forty-eight',49:'forty-nine',51:'fifty-one',52:'fifty-two',53:'fifty-three',
    54:'fifty-four',55:'fifty-five',56:'fifty-six',57:'fifty-seven',58:'fifty-eight',59:'fifty-nine',
    61:'sixty-one',62:'sixty-two',63:'sixty-three',64:'sixty-four',65:'sixty-five',66:'sixty-six',
    67:'sixty-seven',68:'sixty-eight',69:'sixty-nine',71:'seventy-one',72:'seventy-two',73:'seventy-three',
    74:'seventy-four',75:'seventy-five',76:'seventy-six',77:'seventy-seven',78:'seventy-eight',79:'seventy-nine',
    81:'eighty-one',82:'eighty-two',83:'eighty-three',84:'eighty-four',85:'eighty-five',86:'eighty-six',
    87:'eighty-seven',88:'eighty-eight',89:'eighty-nine',91:'ninety-one',92:'ninety-two',93:'ninety-three',
    94:'ninety-four',95:'ninety-five',96:'ninety-six',97:'ninety-seven',98:'ninety-eight',99:'ninety-nine',100:'one hundred'
  }

  for(key in objeto){
    if (key == number) {
      return objeto[key];
    } 
  }

};

console.log(numberPassToAlphabet(92));


/* e2) Ahora, el output debería ser capaz de, 
aparte de devolver el número traducido, devolver también 
los números por los que está formado:*/

/* e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.

sayItWithWords(500) => //output five hundred , five hundred  / 500
sayItWithWords(233) => //output two hundred thirty three, two hundred + thirty + three/ 200 + 30 + 3
sayItWithWords(498) => //output four hundred ninety eight, four hundred + ninety + eight/ 400 + 90 + 8*/


console.log('-------- ----- -  ----');


function numberPassToAlphabet2(number){
  var numberAltered = number.toString().charAt(0);
  var segonNumberChanged = number.toString().charAt(1);
  var thridNumberChanged = number.toString().charAt(2);

  var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','hundred','thousand'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  for (var i = 0; i < 1000; i++) {
    if (i < 10 && number == i) {
      return units[i] + '/'+ i;
    }else if(number === 1000) {
      return units[numberAltered] + '-' + units[11];
    }if (number === 100) {
      return units[numberAltered] + '-' + units[10];
    }else if(number > 100| segonNumberChanged > 0){
     return units[numberAltered] + '-' + units[10] +' and '+ tens[segonNumberChanged] + '-' + units[thridNumberChanged];
    }
  }
  for (var i = 0; i < 10; i++) {
    var index = i+10;
    
    if (i < 20 && number == index) {
      return teens[i] + '/'+ number;
    }
    
  }
  for (var i = 0; i < 10; i++) {
  var index = i*10;
  
    if (number == index) {
      return tens[i] + '/'+ number;
    }
  
  }

  var array = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  for (var i = 0; i < array.length; i++) {
    var numberChanged = number.toString().charAt(0);
    if (numberChanged >= 2) {
      return array[numberChanged] + '-' + units[segonNumberChanged];
    } 
  }
}

  
console.log(numberPassToAlphabet2(19));

/*f) Recibiendo el siguiente texto por parámetro a tu función... :
.....
Prepara dicha función para que modifique y devuelva el texto bajo estas reglas: 
Signos de puntuación: - "." => "," - "," => "" Palabras: - "dolor" =>
 "potato" - "lorem" => "tomato" - "labor" => "cucumber" - "consequatur" =>
  "garlic" - "ipsum" => "onion"*/

console.log('---------texto------');
function textoRemplazado(texto) {

  var resultado = '';
  var valorResultado = '';
  var textoRem = texto;


  var reemplazos = {
    ',': ' ',
    '\\.': ',',
    dolor: 'potato',
    lorem: "tomato",
    labor: "cucumber",
    consequatur: 'garlic',
    ipsum: 'onion'
  };

  for (var key in reemplazos) {
    valorResultado = reemplazos[key];
    textoRem = textoRem.replace(new RegExp(key, 'g'), valorResultado);
    
  }
  console.log(textoRem);
  
}

textoRemplazado('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.');




/* f1) Añade una funcionalidad que cuente cuantos cambios/coincidencias 
ha encontrado de cada palabra, y te los muestre de una forma amigable 
para el usuario*/

console.log('---------texto2------');
function textoRemplazado2(texto) {

  var valorResultado = '';
  var textoRem = texto;


  var reemplazos = {
    ',': ' ',
    '\\.': ',',
    dolor: 'potato',
    lorem: "tomato",
    labor: "cucumber",
    consequatur: 'garlic',
    ipsum: 'onion'
  };

  for (var key in reemplazos) {
    valorResultado = reemplazos[key];
    var regexp = new RegExp(key, 'gi');
    var coincidencias = textoRem.match(regexp).length;
    textoRem = textoRem.replace(regexp, valorResultado);
    console.log('Se han encontrado ' + coincidencias + ' de [' + key + ']');
  }
  console.log(textoRem);
  
}

textoRemplazado2('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.');

















