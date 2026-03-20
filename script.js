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
      question: 'Văn Miếu Mao Điền được xây dựng từ thời đại nào?',
      options: ['Thời Lý', 'Thời Trần', 'Thời Lê', 'Thời Nguyễn'],
      answer: 1,
    },
    {
      question: 'Ai là nhà giáo có quan điểm "dạy người trước khi dạy chữ"?',
      options: ['Mạc Đĩnh Chi', 'Nguyễn Bỉnh Khiêm', 'Chu Văn An', 'Trần Hưng Đạo'],
      answer: 2,
    },
    {
      question: 'Bia tiến sĩ tượng trưng cho điều gì?',
      options: ['Sự giàu có', 'Tri thức và học vấn', 'Quyền lực chính trị', 'Nghệ thuật'],
      answer: 1,
    },
    {
      question: 'Nguyễn Bỉnh Khiêm nổi tiếng với vai trò gì?',
      options: ['Nhà thơ', 'Nhà dự ngôn', 'Nhà khoa học', 'Nhà quân sự'],
      answer: 1,
    },
    {
      question: 'Cổng đình của Văn Miếu có ý nghĩa gì?',
      options: ['Chuyển tiếp từ thế tục sang linh thiêng', 'Bảo vệ di tích', 'Trang trí kiến trúc', 'Đón khách tham quan'],
      answer: 0,
    },
    {
      question: 'Chu Văn An là người của triều đại nào?',
      options: ['Thời Lý', 'Thời Trần', 'Thời Lê', 'Thời Nguyễn'],
      answer: 1,
    },
    {
      question: 'Mạc Đĩnh Chi nổi tiếng với tác phẩm nào?',
      options: ['Truyện Kiều', 'Đại Việt sử ký toàn thư', 'Văn tế nghĩa sĩ Cần Giuộc', 'Lĩnh Nam chích quái'],
      answer: 2,
    },
    {
      question: 'Văn Miếu Mao Điền nằm ở tỉnh nào?',
      options: ['Thanh Hóa', 'Nghệ An', 'Hà Tĩnh', 'Quảng Bình'],
      answer: 1,
    },
    {
      question: 'Nguyễn Bỉnh Khiêm có biệt danh là gì?',
      options: ['Hạc Ông', 'Bạch Vân Cư Sĩ', 'Lạc Đạo', 'Trạng Trình'],
      answer: 1,
    },
    {
      question: 'Bia tiến sĩ đầu tiên ở Việt Nam được dựng năm nào?',
      options: ['1442', '1484', '1505', '1558'],
      answer: 0,
    },
    {
      question: 'Ai là người sáng lập ra hệ thống khoa cử ở Việt Nam?',
      options: ['Lý Thánh Tông', 'Trần Thánh Tông', 'Lê Thánh Tông', 'Nguyễn Hoàng'],
      answer: 2,
    },
    {
      question: 'Văn Miếu thờ ai?',
      options: ['Khổng Tử', 'Lão Tử', 'Thích Ca', 'Không ai'],
      answer: 0,
    },
    {
      question: 'Mạc Đĩnh Chi sống vào thế kỷ nào?',
      options: ['Thế kỷ 13', 'Thế kỷ 14', 'Thế kỷ 15', 'Thế kỷ 16'],
      answer: 1,
    },
    {
      question: 'Nguyễn Bỉnh Khiêm dự đoán gì về Nguyễn Ánh?',
      options: ['Sẽ thất bại', 'Sẽ thành công', 'Sẽ bị giết', 'Sẽ bỏ nước'],
      answer: 1,
    },
    {
      question: 'Chu Văn An được biết đến với phương pháp giáo dục nào?',
      options: ['Dạy vẹt', 'Dạy thực hành', 'Dạy đạo đức trước', 'Dạy toán trước'],
      answer: 2,
    },
    {
      question: 'Văn Miếu Mao Điền được xây dựng năm nào?',
      options: ['1802', '1820', '1835', '1850'],
      answer: 1,
    },
    {
      question: 'Ai là người thiết kế Văn Miếu Hà Nội?',
      options: ['Nguyễn Văn Vĩnh', 'Ngô Thì Nhậm', 'Lê Quý Đôn', 'Nguyễn Du'],
      answer: 1,
    },
    {
      question: 'Mạc Đĩnh Chi là người của vùng nào?',
      options: ['Bắc Bộ', 'Trung Bộ', 'Nam Bộ', 'Tây Nguyên'],
      answer: 1,
    },
    {
      question: 'Nguyễn Bỉnh Khiêm có bài thơ nổi tiếng nào?',
      options: ['Truyện Kiều', 'Cáo thị', 'Qua đèo Ngang', 'Thơ mộng'],
      answer: 1,
    },
    {
      question: 'Bia tiến sĩ có hình dạng như thế nào?',
      options: ['Vuông', 'Tròn', 'Chữ nhật', 'Tam giác'],
      answer: 0,
    },
    {
      question: 'Văn Miếu Mao Điền thuộc loại di tích gì?',
      options: ['Di tích lịch sử', 'Di tích kiến trúc', 'Di tích văn hóa', 'Tất cả đều đúng'],
      answer: 3,
    },
    {
      question: 'Chu Văn An dạy học ở đâu?',
      options: ['Văn Miếu Quốc Tử Giám', 'Trường Quốc Học', 'Nhà riêng', 'Chùa'],
      answer: 0,
    },
    {
      question: 'Mạc Đĩnh Chi được biết đến với việc gì?',
      options: ['Viết sử', 'Dạy học', 'Làm thơ', 'Chiến tranh'],
      answer: 0,
    },
    {
      question: 'Nguyễn Bỉnh Khiêm sống bao nhiêu năm?',
      options: ['70 năm', '80 năm', '90 năm', '100 năm'],
      answer: 1,
    },
    {
      question: 'Văn Miếu Mao Điền có bao nhiêu gian?',
      options: ['3 gian', '5 gian', '7 gian', '9 gian'],
      answer: 1,
    },
    {
      question: 'Ai là người trùng tu Văn Miếu Mao Điền lần cuối?',
      options: ['Nhà Nguyễn', 'Nhà Lê', 'Nhà Trần', 'Nhà Lý'],
      answer: 0,
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