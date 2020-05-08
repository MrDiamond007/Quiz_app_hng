function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    let output = [];
    let answers;
    for (var i = 0; i < questions.length; i++) {
      answers = [];
      for (letter in questions[i].answers) {
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label>"
        );
      }
    }
    output.push(
      '<div class="question">' +
        questions[i].question +
        "</div>" +
        '<div class="answers">' +
        answers.join("") +
        "</div>"
    );
    quizContainer.innerHTML = output.join("");
  }
  showQuestions(questions, quizContainer);

  function showResults(questions, quizContainer, resultsContainer) {
    let answerContainers = quizContainer.querySelectorAll(".answers");
    let userAnswer = "";
    let numCorrect = 0;
    for (var i = 0; i < questions.length; i++) {
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;
      if (userAnswer === questions[i].correctAnswer) {
        numCorrect++;
        answerContainers[i].style.color = "lightgreen";
      } else {
        answerContainers[i].style.color = "red";
      }
    }
    resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
  }

  // show the questions
  showQuestions(questions, quizContainer);

  // when user clicks submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
  showQuestions(questions, quizContainer);

  const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
      },
      correctAnswer: "c",
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
      },
      correctAnswer: "c",
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint",
      },
      correctAnswer: "d",

      question: "Which tool of this is immutable in ES6?",
      answers: {
        a: "const",
        b: "let",
        c: "strict",
        d: "ESLint",
      },
      correctAnswer: "a",

      question: "Is Html a programming language?",
      answers: {
        a: "true",
        b: "false",
        c: "a and b",
        d: "none",
      },
      correctAnswer: "a",
    },
  ];
}
let quizContainer = document.getElementById("quiz");
let resultsContainer = document.getElementById("results");
let submitButton = document.getElementById("submit");
