document.addEventListener('DOMContentLoaded', function () {
  // Tour stepper
  const steps = Array.from(document.querySelectorAll('.step'));
  const tourCards = Array.from(document.querySelectorAll('.tour-card'));
  const prevBtn = document.getElementById('prev-step');
  const nextBtn = document.getElementById('next-step');
  let currentStep = 1;

  function showStep(index) {
    currentStep = index;
    steps.forEach(s => s.classList.toggle('active', parseInt(s.dataset.step, 10) === index));
    tourCards.forEach(c => c.classList.toggle('active', parseInt(c.dataset.step, 10) === index));
  }

  if (steps.length && tourCards.length) {
    steps.forEach(item => {
      item.addEventListener('click', () => showStep(parseInt(item.dataset.step, 10)));
    });
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => showStep(currentStep > 1 ? currentStep - 1 : 1));
      nextBtn.addEventListener('click', () => showStep(currentStep < tourCards.length ? currentStep + 1 : tourCards.length));
    }
    showStep(1);
  }

  // Quiz logic
  const quizData = [
    {
      question: 'Văn Miếu Mao Điền là di tích gắn với lĩnh vực nào?',
      options: ['Kinh tế', 'Giáo dục và khoa bảng', 'Quân sự', 'Y học'],
      answer: 1,
    },
    {
      question: 'Ai là nhà giáo nổi tiếng của Việt Nam được nhắc tới trong trang danh nhân?',
      options: ['Chu Văn An', 'Nguyễn Trãi', 'Lê Quý Đôn', 'Phạm Văn Đồng'],
      answer: 0,
    },
    {
      question: 'Bia tiến sĩ thể hiện giá trị nào?',
      options: ['Giải trí', 'Thương mại', 'Lưu danh hiền tài', 'Kinh doanh'],
      answer: 2,
    },
  ];

  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  const feedbackEl = document.getElementById('feedback');
  const nextQuizBtn = document.getElementById('next-btn');
  const finalScoreEl = document.getElementById('final-score');

  let currentQuizIndex = 0;
  let score = 0;

  function renderQuiz() {
    if (!questionEl || !answersEl) return;
    if (currentQuizIndex >= quizData.length) {
      questionEl.textContent = 'Bạn đã hoàn thành bài quiz!';
      answersEl.innerHTML = '';
      feedbackEl.textContent = '';
      finalScoreEl.style.display = 'block';
      finalScoreEl.textContent = `Điểm của bạn: ${score}/${quizData.length}`;
      nextQuizBtn.style.display = 'none';
      return;
    }

    finalScoreEl.style.display = 'none';
    const q = quizData[currentQuizIndex];
    questionEl.textContent = q.question;
    answersEl.innerHTML = '';
    feedbackEl.textContent = '';
    nextQuizBtn.style.display = 'none';

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.type = 'button';
      btn.addEventListener('click', function () {
        const correct = idx === q.answer;
        if (correct) {
          score += 1;
          feedbackEl.textContent = 'Chính xác!';
          feedbackEl.style.color = 'green';
        } else {
          feedbackEl.textContent = `Sai rồi, đáp án đúng là: ${q.options[q.answer]}`;
          feedbackEl.style.color = 'red';
        }
        Array.from(answersEl.children).forEach(b => b.disabled = true);
        nextQuizBtn.style.display = 'inline-block';
      });
      answersEl.appendChild(btn);
    });
  }

  if (questionEl && answersEl) {
    renderQuiz();
  }

  if (nextQuizBtn) {
    nextQuizBtn.addEventListener('click', function () {
      currentQuizIndex += 1;
      renderQuiz();
    });
  }
});