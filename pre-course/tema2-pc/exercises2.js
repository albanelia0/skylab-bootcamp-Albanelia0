/* a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)

console.log(something, somethingMore, somethingMoreAndMore)
//name, class, id */

var objeto = {
  name: 'Alba',
  lasName: 'Martes',
  age: 22,
};

/*objeto.forEach(function(obj) {
  console.log(obj.name);
}); */

for (prop in objeto) {
  console.log(prop)
};

/* b) Ahora, crea una función que liste solo los valores de las propiedades.

console.log(somethingThatShowsThings) //Tony, VII, 01 */
console.log('--------------------------------');

var valores = {
  name: 'Alba',
  lasName: 'Martes',
  age: 22,
};

for (prop in valores) {
  console.log(valores[prop])
};

/* c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.

console.log(property.ThisProperty) //new class = XI */
console.log('--------------------------------');

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

avenger.class = 'XI';

console.log(avenger);

/* d) Ahora, elimina la propiedad ID y asegura los cambios.

console.log(property.ThisProperty) //Not exist :( */
console.log('--------------------------------');

delete avenger.id;

console.log(avenger);

// e) Añade una nueva propiedad, por ejemplo city y dale un valor.
console.log('--------------------------------');


avenger.city = 'Barcelona';
console.log(avenger);
console.log('--------------------------------');

//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.

console.log('city' + ' => ' + avenger.city);

/*f) Lista el numero de propiedades que contiene el objeto.

console.log() // There are 4 info fields */
console.log('--------------------------------');
var count = 0;

for (prop in avenger) {
  if (prop == prop){
    count += 1;
  }
  
}

console.log('There are ' + count + ' info fields');

// g) Cambia la propiedad name por fullName.
console.log('--------------------------------');

avenger.name

avenger.fullName = 'Tony';
delete avenger.name;

console.log(avenger);

/* h) Lista todas las propiedades del objeto a través de un console.log()

console.log(...) // "Hi there, I'm Tony Stark..." */
console.log('--------------------------------');

console.log('Hi! I\'m ' + avenger.fullName + ' i live in ' + avenger.city + ' and i\'ve the ' + avenger.class);

// h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
console.log('--------------------------------');

avenger.age = 22;
avenger.from = 'Dominican.Rep';
avenger.studies = 'Bootcamp';
avenger.son = 0;
avenger.husband = 'Ismael';
avenger.ageHasband = 28;
avenger.fullName = 'Alba';
console.log(avenger);

console.log('--------------------------------');

function avengers(fullName, lasName, age, country, husband) {
  this.fullName = fullName;
  this.lasName = lasName;
  this.age = age;
  this.country = country;
  this.husband = husband;
}

var nuevoObjeto = new avengers ('Alba','Martes','22','Barcelona','Ismael');

console.log(nuevoObjeto);

/* j) Crea otro objeto y imprime sus propiedades por pantalla.

var otherAvenger = new Avenger...
console.log(otherAvenger) // Hulk... */
console.log('--------------------------------');

var newObject = new avengers ('Ismael', 'Ramon', '28','Barcelona','Alba');

console.log(newObject);

//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:
console.log('--------------------------------');


function datos(fullName, lasName, age, country, husband) {
  this.fullName = fullName;
  this.lasName = lasName;
  this.age = age;
  this.country = country;
  this.husband = husband;
  this.lista = function() {
    return this.fullName + ',' + this.lasName + ',' + this.age + ',' + this.country + ',' + this.husband;
  };
}

var elObjeto = new datos('Alba', 'Martes','22','Barcelona','Ismael');

console.log(elObjeto.lista());
console.log(elObjeto);

/* l) Ahora, crea una función que solo liste los nombres de los objetos instanciados

console.log(someFunction) // Tony Stark, Hulk, Thor... */
console.log('--------------------------------');

for (from in elObjeto) {
  console.log(from);
};

/* m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, 
crea una función para que solo liste los nombres de los Avengers que sean de la misma
ciudad y cuantos hay.

console.log(myFunction) // Are 3 avengers living in NYC: Tony, Hulk, Hawkeye */
console.log('--------------------------------');

var repetirObjetos = [
{madrid: 'Alba'},
{País: 'España'},
{habitantes: 'Muchos'},
{madrid: 'Ismael'},
{país: 'Rep.D'},
{madrid: 'jesé'}
];

var num = 0;
console.log(repetirObjetos.filter(function(nombres) {
  if (nombres.madrid){
     num += 1; 
    console.log('Are ' + num + ' avengers living in madrid:' + nombres.madrid);

  }

  }));

// n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.
console.log('--------------------------------');


var yo = {
  age: 22,
  altura: 62,
  peso: 65,
};
var suma = 0;
var numeros = 0;
for (from in yo) {
  suma += yo[from];
  if (yo[from]) {
    numeros += 1
  }


  }



console.log(Math.round(suma / numeros));


















