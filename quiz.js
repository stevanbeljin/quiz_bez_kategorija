function Quiz(source) {
  // this.questions = this.init(source); // Proba 3. Ne radi. Vraća undefined.
  this.questions;
  this.score = 0;
  this.currentIndex = 0;
  //
  // Proba 1. Radi ali ne dobijam pravi ARRAY.
  // Proba 2. Ne radi. Vraća undefined.
  this.init(source);
}

Quiz.prototype.init = function(url) {
  var json = new XMLHttpRequest();

  // Proba 1. Radi ali ne dobijam pravi ARRAY.
  var questions = [];

  json.addEventListener("readystatechange", function() {
    if (json.status === 200 && json.readyState === 4) {

      // Proba 1. Radi ali ne dobijam pravi ARRAY.
      var data = JSON.parse(json.responseText);
      for (var i = 0; i < data.length; i++) {
        questions.push(data[i]);
      }

      // // Proba 2. Radi dok ne izađem iz anonimne funkcije.
      // Quiz.questions = JSON.parse(json.responseText);
      // console.log(Quiz.questions);

      // // Proba 3. Ne radi. Vraća undefined.
      // return JSON.parse(json.responseText);

    }
  })

  json.open("GET", url);
  json.send();

  // Proba 1. Radi ali ne dobijam pravi ARRAY.
  this.questions = questions;

}

Quiz.prototype.getData = function() {
  console.log('radi');
}

Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.currentIndex];
};

Quiz.prototype.checkAnswer = function(answer) {
  if (answer === this.getCurrentQuestion().answer) {
    this.score += this.getCurrentQuestion().points;
    console.log(this.score);
  }
  this.currentIndex++;
}

Quiz.prototype.end = function() {
  if (this.currentIndex === this.questions.length) {
    return true;
  } else {
    return false;
  }
}

var quiz = new Quiz('https://danilovesovic.github.io/allInOne/pitanja.json');

// // Proba 3. Ne radi. Vraća undefined.
// console.log(quiz.questions);
