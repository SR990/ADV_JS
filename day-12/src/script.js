class Quiz {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
  }

  async fetchQuestions() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
    const data = await response.json();
    this.questions = data.results;
    this.showQuestion();
  }

  showQuestion() {
    const question = this.questions[this.currentIndex];
    const allAnswers = this.shuffle([question.correct_answer, ...question.incorrect_answers]);

    document.getElementById("question").innerHTML = question.question;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    allAnswers.forEach(answer => {
      const btn = document.createElement("button");
      btn.innerText = answer;
      btn.className = "block w-full bg-gray-200 hover:bg-blue-300 py-2 rounded cursor-pointer";
      btn.onclick = () => this.checkAnswer(btn, answer, question.correct_answer);
      answersDiv.appendChild(btn);
    });

    document.getElementById("nextBtn").disabled = true;
  }

  checkAnswer(selectedBtn, selectedAnswer, correctAnswer) {
    const buttons = document.querySelectorAll("#answers button");
    buttons.forEach(btn => {
      btn.disabled = true; 
      if (btn.innerText === correctAnswer) {
        btn.classList.add("bg-green-400", "text-white");
      } else if (btn === selectedBtn) {
        btn.classList.add("bg-red-400", "text-white");
      }
    });

    if (selectedAnswer === correctAnswer) {
      this.score++;
    }

    document.getElementById("nextBtn").disabled = false;
  }

  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex < this.questions.length) {
      this.showQuestion();
    } else {
      document.getElementById("question").innerHTML = "🎉 Quiz Finished!";
      document.getElementById("answers").innerHTML = "";
      document.getElementById("nextBtn").style.display = "none";
      document.getElementById("score").innerText = `✅ Your Score: ${this.score} / ${this.questions.length}`;
    }
  }

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
}

const quiz = new Quiz();
quiz.fetchQuestions();

document.getElementById("nextBtn").addEventListener("click", () => {
  quiz.nextQuestion();
});