function Quiz() {
  this.questions = [];
  this.score = 0;
  this.currentIndex = 0;
  this.init();
}

Quiz.prototype.init = function() {
  var json = new XMLHttpRequest();
  var questions = [];
  json.addEventListener("readystatechange", function() {
    if (json.status === 200 && json.readyState === 4) {
      var data = JSON.parse(json.responseText);
      for (var i = 0; i < data.length; i++) {
        questions.push(data[i]);
      }
    }
  })
  json.open("GET",
    'https://danilovesovic.github.io/allInOne/pitanja.json');
  json.send();
  this.questions = questions;
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

var quiz = new Quiz();
