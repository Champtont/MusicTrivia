//Let's grab things that we will need
const questionContainer = document.getElementById("container");
const questionele = document.getElementById("question");
const answerButtons = document.querySelectorAll(".option");

//we need questions to work with! An Array of objects is required.
const questionsArray = [
  {
    question: "(test question)What is two plus two?",
    answers: [
      { text: "four", correct: true },
      { text: "22", correct: false },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "does this work?",
    answers: [
      { text: "I hope so", correct: false },
      { text: "Hell yes!", correct: true },
    ],
  },
];

//shuffling questions
const shuffleQuestions = questionsArray.sort(() => Math.random() - 0.5);

//we have to set index to zero
const currentQuestionIndex = 0;
//Making Things work!!!

//we have to initialize the game by:
//creating "question showing" function which will also loop through answers:
const showQuestion = (question) => {
  questionele.innerText = question.question;
  //randomizing location of answers
  const answers = question.answers.sort(() => Math.random() - 0.5);

  //below accesses first index then the text value
  console.log(answers[0]["text"]);
  //run for loop that places the text into each container
  for (let i = 0; i < answers.length; i++) {
    answerButtons[i].innerText = answers[i]["text"];
  }
};

//creating a set question function:
const setNextQuestion = () => {
  showQuestion(shuffleQuestions[currentQuestionIndex]);
};

//Then calling inittial function: This will display immediately:
setNextQuestion();
