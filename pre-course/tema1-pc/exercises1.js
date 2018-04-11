

//Strings

/* a) Puedes contar cuantas letras tiene tu nombre?
My Name has 4 letters */


  console.log('My Name has ' + 'Alba'.length + ' letters');




// b) Añade tu apellido e indica en que posición se encuentra
console.log('--------------------------------');

  var nombre = 'Alba Martes';
  var position = nombre.indexOf(' ') + 1;
  console.log('Your first last name starts on position ' + position);



/* c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.

console.log(myString) // My Name is Tony */

console.log('--------------------------------');


  onliName = nombre.slice(0,4);
  console.log('My name is ' + onliName);



console.log('--------------------------------');

/* d) Ahora, solo tu apellido.

console.log(myString) // My lastname is Stark */


  var nameArray = nombre.split(' ');
  console.log('My lastname is ' + nameArray [1]);




console.log('--------------------------------');

/* d1) Iguala el resultado a una variable nueva e imprímela por pantalla.

console.log(myFirstString +", " + myNewString) // Tony Stark, Stark */

console.log('--------------------------------');

console.log(nombre + ',' + nameArray[1]);



/* e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.

console.log(myNewString) // Hello, Mr. Stark */
console.log('--------------------------------');

nameArray[0] = 'Ms';

console.log('Hello ' + nameArray[0] +'. ' + nameArray[1]);


/* f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

console.log(mySelection) // my lastname is STARK */
console.log('--------------------------------');



  

  console.log('My last name is ' + nameArray[1].toUpperCase());



/* g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.

var something = myFirstString + "is awesome"
console.log(something) \\ "Tony is awesome" */

console.log('--------------------------------');


  var firtsName = 'Ismael Ramon';
  var igualar = firtsName.split(' ');
  console.log(igualar[0] + ' is awesome');


/* h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?

console.log(myFirstLastnameLetters) // S.Y */

console.log('--------------------------------');


  var inicial = nombre.split(' ');
  console.log(inicial[0].substr(0,1) + '.' + inicial[1].substr(0,1));


//Arrays

/* a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

console.log(myName) // T/O/N/Y/S/T/A/R/K */
console.log('--------------------------------');


var name = ['Alba', 'Martes'];


  var fullname = name[0] + name[1];
 
  console.log(fullname.split('').join('/'));
  

/* b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

console.log(myName) // S|T|A|R|K */
console.log('--------------------------------');


  console.log(name[1].split('').join('|'));
  


/* c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

console.log(myName) // 1º T, 2º O, 3º N, 4º Y */ 

  nombreArray = ['Alba', 'Martes'].join('');
  for (var i = 0; i < nombreArray.length; i++) {
    console.log(i + 'º' + nombreArray[i]);
  }

/* d)Como en el ejercicio anterior, pero seleccionando tu apellido

console.log(myLastName) // 5º S, 6º T, 7º A, 8º R, 9º K */
console.log('--------------------------------');

nombreArray = ['Alba', 'Martes'];
var firstname = nombreArray[0];
var lastname = nombreArray[1];
  for (var i = 0; i < lastname.length; i++) {
    console.log((firstname.length + i) + 'º' + lastname[i]);
  }

/* e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings

console.log(myInitials) // T.S */
console.log('--------------------------------');

var inicialNombre = nombreArray[0].slice(0,1);
var inicialApellido = nombreArray[1].slice(0,1);
console.log(inicialNombre + '.' + inicialApellido);


/* f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

console.log(mySelector) // My name is TONY and i'm 40 years old */
console.log('--------------------------------');

nombreArray = ['Alba', 'Martes', '22'];

console.log('My name is ' + nombreArray[0] + ' and i\'m ' + nombreArray[2] + ' years old');

/* g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

console.log(myCityAdd) // City added to array! => Tony, Stark, 40, New York */
console.log('--------------------------------');

nombreArray = ['Alba', 'Martes', '22'];
nombreArray.push('Barcelona');
console.log(nombreArray);


/*h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

myCityAdd() // City added to array! => Tony, Stark, 40, New York
myCityDelete() // City deleted! => Tony, Stark, 40 */

console.log('--------------------------------');
nombreArray.push('Barcelona');
var myCityAdd = nombreArray;
var myCityDelete = nombreArray.pop();
console.log(nombreArray);

/* l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

numbers = [...]
var multByTwo = numbers.map(...) */
console.log('--------------------------------');



var numbers = [0,1,2,3,4,5,6,7,8,9,10];

var multiplicar = numbers.map(function(x) {
  return x * 2;
});
console.log(multiplicar);

/* l1) Reformula la función para que puedas especificar por cual número debería
 multiplicar cada elemento de la array.

var num = 3; // cada número se multiplicará por 3
function multByNum(num){
    var arrayMult = numbers.map(...)
    return arrayMult
} */
console.log('--------------------------------');


var num = 3; // cada número se multiplicará por 3
function multByNum(number){
    var arrayMult = numbers.map(function(x){
      return x * number;
    });
    return arrayMult
}

console.log(multByNum(num));

// m) Podrías mostrarlos en el orden inverso? Resources:
console.log('--------------------------------');

var num = 3; // cada número se multiplicará por 3
function multByNum(number){
    var arrayMult = numbers.map(function(x){
      return x * number;
    });
    return arrayMult.reverse();
}

console.log(multByNum(num));

/* n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

console.log(repeatLetters) // Tony Stark, the letter 'T' => 2 times. */
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

/* n1) Ahora muestra por consola que letras NO se repiten y muestra 
tu nombre sin esas letras

console.log(repeatLetters) // Tony Stark, the letters => o, n, y, s, a, r, k 
are not repeated, the name is => Ony Sark */
console.log('--------------------------------');

var contador = {};
for (var i = 0; i < fullNombre.length; i++) {
  
  var letra = fullNombre[i].toLowerCase();
  if (contador[letra] == undefined){
    contador[letra] = 0;
  }

  contador[letra]++;

}
var arrayLetras = [];
for (letra in contador) {
  if (contador[letra] < 2 && letra != ' ') {
    arrayLetras.push(letra.toLowerCase());
  }
}
var resto = '';
// iterar sobre cada caracter del nombre completo
for (var i = 0; i < fullNombre.length; i++) {
  var letra = fullNombre[i].toLowerCase();

  // comprobar si la letra está en la lista de letras permitidas
  if (arrayLetras.includes(letra)) {
    // añadirla a la cadena final solo si la letra estaba en la lista
    resto += letra;   
  }
}
console.log('Alba Martes, the letters => ' + arrayLetras.join(',') + 'are not repeated, the name is  => ' + resto);




/* Numbers

a) Que hora es? Declara la hora como número y devuelvela como String

console.log(myString + myNumberStringify) // It's 10:45 of morning */
console.log('--------------------------------');


var hora = 16.30;

function hourFunction(hora) {
  console.log('It\'s ' + hora.toString() +'h' + ' of evening');
}

hourFunction(15.30);


/* b) Nono, que hora exactamente? Dime la hora sin minutos

console.log(myString) // It's around 10 of morning */
console.log('--------------------------------');


hora = 14;
console.log('It\'s around ' + hora + ' of morning');

/* c) Ahora, declara tu hora y muéstrala redondeada.

console.log(...(10.34)) // 11! */
console.log('--------------------------------');

hora = Math.round(16.30);
console.log( hora );

/* d) Hagamos una calculadora. Primero, la suma.

console.log(sum) //The sum of 7+3 is 10 */
console.log('--------------------------------');
var numeros = 7+3;

console.log('The sum of 7+3' + ' is ' + numeros);

/* d1) Añade la resta...

console.log(sum + rest) // The sum and rest of 7 and 3 is 10 and 4  */
console.log('--------------------------------');

var numeros = 7+3;
var rest= 7-3;

console.log('The sum and rest of 7 and 3' + ' is ' + numeros + ' and ' + rest);

/*d2) Y la multiplicación

console.log(sum + rest + mult) // 10, 4 and 21 */
console.log('--------------------------------');

var numeros = 7+3;
var rest= 7-3;
var mult = 7*3;


console.log(numeros + ', ' + rest + ' and ' + mult);






























































