//Let's grab things that we will need
const questionContainer = document.getElementById("container");
const questionele = document.getElementById("question");
const pText = document.querySelectorAll(".option");
const answerButtons = document.querySelectorAll(".stepford");

console.log(answerButtons);
//we need questions to work with! An Array of objects is required.
const questionsArray = [
  {
    question:
      " What was the last single released from Michael Jackson’s Thriller album?",
    answers: [
      { text: "Thriller", correct: true },
      { text: "Billie Jean", correct: false },
      { text: "Beat It", correct: false },
      { text: "Human Nature", correct: false },
    ],
  },
  {
    question: "What song is considered to be Madonna’s first mainstream hit?",
    answers: [
      { text: "Holiday", correct: true },
      { text: "Isla Bonita", correct: false },
      { text: "Vogue", correct: false },
      { text: "Papa Don't Preach", correct: false },
    ],
  },
  {
    question: "What movie was Eye of the Tiger the theme song for?",
    answers: [
      { text: "Rocky III", correct: true },
      { text: "Rocky II", correct: false },
      { text: "Rocky I", correct: false },
      { text: "Rocky IV", correct: false },
    ],
  },
  {
    question:
      "Who is the band that reminded listeners to don’t stop believing?",
    answers: [
      { text: "Journey", correct: true },
      { text: "Aerosmith", correct: false },
      { text: " The Rolling Stones", correct: false },
      { text: "Def Lepard", correct: false },
    ],
  },
  {
    question: "Who was the hype man in the rap group Public Enemy?",
    answers: [
      { text: "Flavor Flav", correct: true },
      { text: "E-Love", correct: false },
      { text: "The Bosstone", correct: false },
      { text: "Jay-Z", correct: false },
    ],
  },
  {
    question:
      "Who is the 80’s rock band known for the hits “Livin’ on a Prayer” and “You Give Love a Bad Name?",
    answers: [
      { text: "Bon Jovi", correct: true },
      { text: "Aerosmith", correct: false },
      { text: "Guns N Roses", correct: false },
      { text: "Journey", correct: false },
    ],
  },
];

//These may change
let score = 0;
let maxQuestions = questionsArray.length;
//lets display these values
const pointInput = document.getElementById("pointsScored");
const maxQInput = document.getElementById("maxPoints");

pointInput.value = score;
maxQInput.value = maxQuestions;

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

  //below accesses first index then the text value...testing
  // console.log(answers[0]["text"]);

  //run for loop that places the text into each container
  for (let i = 0; i < answers.length; i++) {
    pText[i].innerText = answers[i]["text"];
    //and then whether the answer is correct or not.
    pText[i].answers = answers[i]["correct"];

    //add button Event listener to all buttons
    answerButtons[i].addEventListener("click", selectAnswer);
  }
};

//create select answer event
function selectAnswer(event) {
  //gives info on button clicked
  const selectedbutton = event.target;
  const correct = selectedbutton.answers;
  console.log(correct);
}

//creating a set question function:
const setNextQuestion = () => {
  showQuestion(shuffleQuestions[currentQuestionIndex]);
};

//Then calling inittial function: This will display immediately:
setNextQuestion();

//try to create a correct answer data set This should check answer inside next button
/*if (answers.correct === true) {
  score++;
} else {
  score--;
}*/
