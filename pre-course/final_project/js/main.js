// STATE - global vars
// --------------------------------------------------
var gameStarted = false;
var currentQuestion = null;

var rightCounter = 0;
var failedCounter = 0;
var pasapalabraCounter = 0;

var questions = [
  { letter: "a", answer: "abducir", state: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
  { letter: "b", answer: "bingo", state: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
  { letter: "c", answer: "churumbel", state: 0, question: ("CON LA C. Niño, crío, bebé") },
  { letter: "d", answer: "diarrea", state: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
  { letter: "e", answer: "ectoplasma", state: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
  { letter: "f", answer: "facil", state: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
  { letter: "g", answer: "galaxia", state: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
  { letter: "h", answer: "harakiri", state: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
  { letter: "i", answer: "iglesia", state: 0, question: ("CON LA I. Templo cristiano") },
  { letter: "j", answer: "jabali", state: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
  { letter: "k", answer: "kamikaze", state: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
  { letter: "l", answer: "licantropo", state: 0, question: ("CON LA L. Hombre lobo") },
  { letter: "m", answer: "misantropo", state: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
  { letter: "n", answer: "necedad", state: 0, question: ("CON LA N. Demostración de poca inteligencia") },
  { letter: "ñ", answer: "señal", state: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
  { letter: "o", answer: "orco", state: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
  { letter: "p", answer: "protoss", state: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
  { letter: "q", answer: "queso", state: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
  { letter: "r", answer: "raton", state: 0, question: ("CON LA R. Roedor") },
  { letter: "s", answer: "stackoverflow", state: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
  { letter: "t", answer: "terminator", state: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
  { letter: "u", answer: "unamuno", state: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
  { letter: "v", answer: "vikingos", state: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
  { letter: "w", answer: "sandwich", state: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
  { letter: "x", answer: "botox", state: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
  { letter: "y", answer: "peyote", state: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
  { letter: "z", answer: "zen", state: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
];

// ACTIONS - logic of the game
// --------------------------------------------------
function startGame() {
  gameStarted = true;
  askNextQuestion();
}

function askNextQuestion() {
  // reset the user input
  document.getElementById('answer').value = '';

  // GET THE NEW QUESTION TO BE ASKED

  // game started but no question yet asked
  if (currentQuestion === null) {
    currentQuestion = questions[0];

  // game is going on, and we must take on the next question
  } else {
    // where is the current question?
    var currentIndex = questions.indexOf(currentQuestion);

    // find the next unanswered question
    do {
      currentIndex = (currentIndex + 1) % questions.length;
    } while (questions[currentIndex].state !== 0)

    currentQuestion = questions[currentIndex];
  }

  // WE GOT A NEW QUESTION, SHOW IT!!
  document.getElementById('screen').value = currentQuestion.question;
}

function answerQuestion() {
  // read the answer from the input
  var userAnswer = document.getElementById('answer').value;

  // check if the input is empty
  if (userAnswer === '') {
    passWord();
    return;
  }

  // check if the answer is right
  if (userAnswer.toLowerCase() === currentQuestion.answer) {
    // mark the question as correct and increase the right answer counter
    currentQuestion.state = 1;
    rightCounter++;
    var letterHtml = document.getElementById(currentQuestion.letter);
    letterHtml.className = 'letter green';

    // add informative text to scoreboard
    addTextToScoreboard('Correct!! You\'re right in ' + rightCounter + ' questions!');

  } else {
    // mark the question as wrong and increase the failed answer counter
    currentQuestion.state = 2;
    failedCounter++;
    var letterHtml = document.getElementById(currentQuestion.letter);
    letterHtml.className = 'letter red';

    // add informative text to scoreboard
    addTextToScoreboard('What a pity!! You failed in ' + failedCounter + ' questions!');
  }

  if (checkGameEnd()) {
    // FINISH THE GAME!!
    alert(
      'The game is finished!!\n' +
      'Correct questions: ' + rightCounter + '\n' +
      'Failed questions: ' + failedCounter + '\n' +
      'Passed questions: ' + pasapalabraCounter + '\n\n' +
      'Thanks for playing!!!'
    );
    window.location.reload();
  } else {
    // automatically go to the next question because game is not finished
    askNextQuestion();
  }
}

function passWord() {
  // add pasapalabra points
  pasapalabraCounter++;

  // add informative text to scoreboard
  addTextToScoreboard('You passed word in ' + pasapalabraCounter + ' questions!');

  // go to the next question
  askNextQuestion();
}

function checkGameEnd() {
  if (rightCounter + failedCounter >= questions.length) {
    return true;
  }
  return false;
}

function gameNotStartedMessage() {
  alert('The game is not started!! Please, start the game!!');
}

function addTextToScoreboard(message) {
  var scoreboard = document.getElementById('score');
  scoreboard.value += message + '\n';

  // scroll down to the bottom of the textarea
  scoreboard.scrollTop = scoreboard.scrollHeight;
}

// EVENTS - user actions
// --------------------------------------------------
function eventStart() {
  var wantToStart = confirm('Do you wanna start the game?');
  if (wantToStart) {
    startGame();
  }
}

function eventSubmit() {
  if (!gameStarted) {
    gameNotStartedMessage();
    return;
  }

  answerQuestion();
}

function eventPasapalabra() {
  if (!gameStarted) {
    gameNotStartedMessage();
    return;
  }

  passWord();
}