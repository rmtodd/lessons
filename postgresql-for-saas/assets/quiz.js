/* Shared quiz widget — reused across all lessons */

(function () {
  document.querySelectorAll('.quiz-question').forEach(function (q) {
    var options  = q.querySelectorAll('.quiz-option');
    var feedback = q.querySelector('.quiz-feedback');
    var checkBtn = q.querySelector('.quiz-check');
    var correct  = q.dataset.correct;
    var selected = null;

    options.forEach(function (opt) {
      opt.addEventListener('click', function () {
        if (opt.disabled) return;
        options.forEach(function (o) { o.classList.remove('selected'); });
        opt.classList.add('selected');
        selected = opt.dataset.value;
        if (checkBtn) checkBtn.disabled = false;
      });
    });

    if (checkBtn) {
      checkBtn.disabled = true;
      checkBtn.addEventListener('click', function () {
        if (!selected) return;

        options.forEach(function (opt) {
          opt.disabled = true;
          if (opt.dataset.value === correct) {
            opt.classList.add('reveal-correct');
          }
          if (opt.dataset.value === selected && selected !== correct) {
            opt.classList.remove('selected');
            opt.classList.add('incorrect');
          }
        });

        var isCorrect = selected === correct;
        feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
        feedback.style.display = 'block';
        checkBtn.disabled = true;

        // Fire score event for tallying
        q.dispatchEvent(new CustomEvent('quiz-answered', {
          bubbles: true,
          detail: { correct: isCorrect }
        }));
      });
    }
  });

  // Score tally
  var quizSection = document.querySelector('.quiz-section');
  if (!quizSection) return;

  var total    = quizSection.querySelectorAll('.quiz-question').length;
  var answered = 0;
  var score    = 0;
  var scoreEl  = quizSection.querySelector('.quiz-score');

  quizSection.addEventListener('quiz-answered', function (e) {
    answered++;
    if (e.detail.correct) score++;
    if (answered === total && scoreEl) {
      var pct = Math.round((score / total) * 100);
      var msg = pct === 100
        ? 'Perfect — ' + score + '/' + total + '. Strong retention on first pass.'
        : score + '/' + total + ' (' + pct + '%). Review the explanations for any you missed, then move on.';
      scoreEl.textContent = msg;
      scoreEl.style.display = 'block';
    }
  });
})();
