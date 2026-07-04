// Shared quiz widget. Usage: <div class="quiz" data-correct="1"> ... <button class="opt">...</button> x N ... <div class="feedback">...</div></div>
document.querySelectorAll('.quiz').forEach(function (quiz) {
  var correctIndex = parseInt(quiz.dataset.correct, 10);
  var options = quiz.querySelectorAll('.opt');
  var feedback = quiz.querySelector('.feedback');
  options.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      options.forEach(function (b) { b.disabled = true; });
      if (i === correctIndex) {
        btn.classList.add('correct');
      } else {
        btn.classList.add('wrong');
        options[correctIndex].classList.add('correct');
      }
      if (feedback) feedback.classList.add('show');
    });
  });
});
