/*Exercises:

a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

function (myName){
    console.log('hello + myName')//output: 'hello myName'
} */
function myName(name) {
  console.log('hello ' + name);
}

myName('Alba');
/*b) Intenta retornar los valores en lugar de usar console.log

function (myName){
    return 'hello + myName' // output: 'hello myName'
} */
function myame(name) {
  return 'hello ' + name;
}

console.log(myame('maria'));

/*c) Ahora, añade tu edad y concaténala al return

return 'myMessage' //output: 'hello myName, you're myAge years old.'*/
 var myAge = 22;
function myNombre(name) {
  return 'hello ' + name + ' you\'re ' + myAge + ' years old';
}

console.log(myNombre('Alba'));

/*d) Iguala tu función a una variable y ejecútala

var MyFunction = ... //output: 'hello myName, you're myAge years old.'
myFunction()
=> Podemos guardar resultados de funciones en una variable, es decir, sus returns
*/
var myFunction = function myNombre(name) {
  return 'hello ' + name + ' you\'re ' + myAge + ' years old';
}

/* e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados Now, try to declare other function and assign it result to other variable called myAge, and try to print the result of both functions in one line.
*/

var nombr = function myname(name){
return name;
}

var resultAge = function myage(age){
return age;
}
console.log(nombr('Alba ') + resultAge(23));
/* name() + myAge() //output: IronMan 40
e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.

name() + (myAge() + myRandomNumber).toString()//output: IronMan 45*/


var convert = nombr('Alba ') + resultAge(23) + Math.random().toFixed().toString();
console.log(convert);
/*
f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

var...
var...
myName(param1) + myAge(param2) //output: IronMan 43*/

function pasarFunct(arg1, arg2) {
  return arg1 + arg2;
}

console.log(pasarFunct(nombr('Alba '),resultAge(23)));
/* g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas

function ... (){
    var x = myName(param1)
    var y = myAge(param2)
    return x + y
} //output: IronMan 40*/

function funcFather(arg1, arg2){
  var x = nombr(arg1);
  var y = resultAge(arg2);
  return x + y;
}

console.log(funcFather('Ismael ', 28));
/* h) Haz otra función hija que solo devuelva un número random, ese número random 
será el argumento que se pasará como parámetro a la función age()

return x + y // output: IronMan 6457689
http://www.w3schools.com/jsref/jsref_random.asp*/
function hija() {
 
 argument =   Math.random().toFixed();
 return argument;
}



function functionFather(arg1, arg2){
  var x = nombr(arg1);
  var y = resultAge(arg2);
  return x + y;
}

console.log(funcFather('Ismael ',hija()));



/* i) Ahora, limita el random de 0 a 50, Muestra un mensaje 
si el output age es < 20 y otro si es de 21 - 50

return x + y // output: IronMan 3...Sure you're Tony Stark?*/

var random = Math.random() * 50;
function limitRandom(arg1) {

  if (arg1 < 20) {
    return functionFather('Alba y Ismael ', 2);

  } else {

    return 'Mayor a 20! :O';

  }
}

console.log(limitRandom(random));
/* j) Al return de la función name(), concaténale otro mensaje

return x + y // output: Tony Stark...aka IRONMAN, 34...Sure you're Tony Stark?*/


console.log(nombr('Ellos son ') + limitRandom(random));
/* k) Ahora, modifica el return de la función padre para que
 devuelva sus datos en un mensaje amigable

return x + y // output: The first function returns: 
'Tony Stark...aka IRONMAN', The second function returns: '34...Sure you're Tony Stark?'*/


console.log('Ella es ' + functionFather('Alba', ' y tiene 22 Años'));

/*l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada

return x + y // output: "The first function returns: Hulk... You're not IRONMAN!"*/
function miName() {
  name = 'Alba ';
  return name;
}

function functionFather(arg1, arg2){
  var x = nombr(arg1);
  var y = resultAge(arg2);
  
  if (arg1 == 'Alba ') {
    return  x + y;
  } else {
    return 'Tú no eres Alba!';
  }

}

console.log(functionFather(miName(), 22));

/*m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.

function GenerateRandom(){
    ...
    return randomNumber.
}

function father(){
    var numR = GenerateRandom()
    return ...numR()...
}*/
function generateRandom() {
  var numb = Math.random().toFixed();
  return numb;
}


function functionFather(arg1, arg2){
  var x = nombr(arg1);
  var y = generateRandom(arg2);
  return x + y;
}

console.log(functionFather('ALBA'));

/*n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.

function father(){
    myFunction();
    myOtherFunction();
    myOtherVarFunction();
    return...
}*/

function father(){
  return miName() + functionFather('Alba ', 22) + myFunction('Alb');

}
console.log(father());



/*ñ) Intenta hacer push de todos los resultados 
de las funciones a una array declarada en el padre,
 muestra los resultados de esta array como siempre.*/

console.log('-----------');
 function arrayFunction() {
  return father().split(' ');
 }

console.log(arrayFunction());

/*o) Crea una funcion que llame a nuestra funcion father(), 
ésta, a parte de llamarla, deberá hacer otro push 
"hello from the dark side..." a la array que crea father(). 
Muestra toda la array completa.*/


function callFunctionFather(){
  
  var aladir = arrayFunction();
  aladir.push('hello from the dark side...');
 return aladir;

}

console.log(callFunctionFather());


/*p) 🔞 👊🏼 Llama a ésta nueva función dos veces, 
muestra sus resultados por pantalla y 
compara sus randomNums, mostrando un mensaje indicando cual es mayor.
 El nombre pasado por parámetro también 
 deberá ser random entre una array de nombres, con lo cual,
  también deberás refactorizar las funciones hijas.

function gandFather(){
    var names = ['hulk', 'ironMan', '...']
    var selectedName...
    var selectedName2...
    if(father(selectedName) > father(selectedName2))
        ...
    else
        ...
    return father(selectedName).push().join()...
}*/

function grandFather(arg1,arg2){
  var names =['Alba', 'Ismael', 'Jesé'];
  var numRandom = arg1;
  var numRandom2 = arg2;

  if (numRandom > numRandom2) {
    return names;
  } else {
    return 'El numRandon es menor!';
  }
}



console.log(grandFather(random,Math.random()));
console.log(grandFather(random,Math.random()));
console.log(grandFather(random,Math.random()));



/*p1) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como OBJECTS.
 Muestra por pantalla los objetos sin estilizar el output.*/

function rrayFunction(Alba,Alba,hello,Alb,you,years,old) {
 
  this.Alba = Alba;
  this.Alba = Alba;
  this.hello = hello;
  this.Alb = Alb;
  this.you = you;
  this.years = years;
  this.old = old;
  

  }

var nuevaF = new rrayFunction('Alba','Alba','0hello', 'Alb','you\'re','22','years','old');
console.log(nuevaF);



/*p2) Muestra los resultados de los OBJECTS recorriendolos y mostrando los valores de una forma amigable.
*/



