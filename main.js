var startBtn = document.getElementById('start');
startBtn.addEventListener('click', startQuiz);
var questionText = document.getElementsByTagName('h2')[0];
var optionsBtn = document.getElementsByClassName('option');
var footer = document.getElementsByTagName('footer')[0];
var optionDiv = document.getElementsByClassName('options')[0];


function startQuiz() {

  if (quiz.end()) {
    endOfQuiz();
  } else {
    startBtn.style.display = 'none';
    questionText.innerHTML = quiz.getCurrentQuestion().text;
    var myArr = [];
    var myArr2 = myArr.concat(quiz.getCurrentQuestion().options);
    for (var i = 0; i < optionsBtn.length; i++) {
      var rand = Math.floor(Math.random() * myArr2.length);
      optionsBtn[i].innerHTML = myArr2[rand];
      optionsBtn[i].addEventListener('click', userAnswer);
      myArr2.splice(rand, 1);
    }
    footer.innerHTML = '<h3>Question ' + (quiz.currentIndex + 1) + ' of ' +
      quiz.questions.length + '</h3>';
  }

}

function userAnswer() {
  quiz.checkAnswer(this.innerHTML);
  startQuiz();
}

function endOfQuiz() {
  questionText.innerHTML = 'Finished!';
  footer.innerHTML = "";
  optionDiv.innerHTML = '<h1>Points won: ' + quiz.score + '</h1>';
}
