//Let's grab things that we will need
const questionContainer = document.getElementById("container");
const questionele = document.getElementById("question");
const pText = document.querySelectorAll(".option");
const answerButtons = document.querySelectorAll(".stepford");
const nextButton = document.getElementById("next");
const finishButton = document.getElementById("getResults");

//set songs for use in "What's that tune? type questions"
const sweetHome = new Audio("/assets/Sweet Home Alabama.mp3");
const iCouldFall = new Audio("/assets/i could fall in love.mp3");
const weWillRockYou = new Audio("/assets/We Will Rock You.mp3");

//soundeffects
const rightAnswer = new Audio("/assets/Ding-sound-effect.mp3");
const wrongAnswer = new Audio("/assets/wronganswer-37702.mp3");

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
  {
    question:
      "In 1984, what song was Tina Turner’s first and only Billboard Hot 100 number-one hit?",
    answers: [
      { text: "What’s Love Got to Do with It", correct: true },
      { text: "The Best", correct: false },
      { text: "Better Be Good To Me", correct: false },
      { text: "Private Dancer", correct: false },
    ],
  },
  {
    question:
      "What rock band and hip hop group collaborated on the hit 80’s song “Walk This Way?",
    answers: [
      { text: "Run-DMC and Aerosmith", correct: true },
      { text: "The Beastie Boys And Janes Addiction", correct: false },
      { text: "Public Enemy And Van Halen", correct: false },
      { text: "Fat Boys And Mötley Crüe", correct: false },
    ],
  },
  {
    question:
      "What English singer had a hit in 1981 with the song “In the Air Tonight?",
    answers: [
      { text: "Phil Collins", correct: true },
      { text: "George Michael", correct: false },
      { text: "John Waite", correct: false },
      { text: "Sting", correct: false },
    ],
  },
  {
    question: "What song is this?",
    song: sweetHome,
    answers: [
      {
        text: "Sweet Home Alabama",
        correct: true,
      },
      { text: "Black Betty", correct: false },
      { text: "Free Bird", correct: false },
      { text: "Alabama", correct: false },
    ],
  },
  {
    question: "Who is the Artist of this song?",
    song: iCouldFall,
    answers: [
      { text: "Salena", correct: true },
      { text: "Jennifer Lopez", correct: false },
      { text: "Gloria Trevi", correct: false },
      { text: "Paulina Rubio", correct: false },
    ],
  },
  {
    question: "Which band does this song belong to?",
    song: weWillRockYou,
    answers: [
      { text: "Queen", correct: true },
      { text: "Kiss", correct: false },
      { text: "Boston", correct: false },
      { text: "Styx", correct: false },
    ],
  },
];

//These may change
let score = 0;
let maxQuestions = questionsArray.length;

//calling a button
const getButton = () => {
  finishButton.classList.remove("hide");
  nextButton.classList.add("hide");
};
//let's display these values
const pointInput = document.getElementById("pointsScored");
const maxQInput = document.getElementById("maxPoints");

pointInput.value = score;
maxQInput.value = maxQuestions;

//shuffling questions
const shuffleQuestions = questionsArray.sort(() => Math.random() - 0.5);

//we have to set index to zero
let currentQuestionIndex = 0;
//Making Things work!!!

//we have to initialize the game by:
//creating "question showing" function which will also loop through answers:
const showQuestion = (question) => {
  questionele.innerText = question.question;
  if (question.song) {
    question["song"].play();
  }
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

//add points
const addPoint = () => {
  score++;
  pointInput.value = score;
};

//create select answer event
function selectAnswer(event) {
  /*gives info on button clicked...I needed a for loop to stop the e.target from choosing a new target.
  I was having trouble with calling the correct answers later in the code, then I realized that it was
  because I was naming the variable inside of the function. fun fact: you don't have to do that =)*/
  for (let i = 0; i < answerButtons.length; i++) {
    const selectedbutton = event.target;
    correct = selectedbutton.answers;
    console.log(correct);
    if (selectedbutton === undefined) {
      correct = undefined;
    }
  }
  return correct;
}

let correct;

//creating a set question function:
const setNextQuestion = () => {
  showQuestion(shuffleQuestions[currentQuestionIndex]);
  currentQuestionIndex++;
  correct = undefined;
};
//Then calling inittial function: This will display immediately:
setNextQuestion();

const checkAnswer = () => {
  if (correct === true) {
    addPoint();
    rightAnswer.play();
    rightAnswer.currentTime = 0;
    setNextQuestion();
  } else if (correct === false) {
    wrongAnswer.play();
    wrongAnswer.currentTime = 0;
    setNextQuestion();
  } else if (correct === undefined) {
    alert("you havent selected an answer");
  }
};

const callNext = (event) => {
  for (let i = 0; i < questionsArray.length; i++) {
    if (questionsArray[i].song) {
      questionsArray[i].song.pause();
    }
  }
  //still trying to get the button to display on the last question
  for (let i = 0; i < questionsArray.length; i++) {
    if (currentQuestionIndex === questionsArray.length - 1) {
      getButton();
    }
  }
  for (let i = 0; i < 1; i++) {
    checkAnswer();
    console.log("push");
  }
};

nextButton.addEventListener("click", callNext);
finishButton.addEventListener("click", checkAnswer);
//try to create a correct answer data set This should check answer inside next button
