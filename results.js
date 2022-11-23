const url = new URLSearchParams(window.location.search);
const userScore = url.get("score");
const maxPoints = url.get("total");
const percentage = (userScore / maxPoints) * 100;

console.log(percentage);
const resultBar = document.getElementById("results-barTop");
resultBar.style.backgroundImage = `linear-gradient(90deg, gold ${percentage}%, transparent ${percentage}%)`;

//give them the score
const h2 = document.querySelector("h2");
h2.innerText = `You Scored: ${userScore} out of ${maxPoints}`;

//let them know how they have done
const h1 = document.querySelector("h1");
if (percentage === 100) {
  h1.innerText = `Wow! You're a Big Music Nerd!`;
} else if (percentage < 100 && percentage >= 90) {
  h1.innerText = `Cool, You're a bit Music Nerdy!`;
} else if (percentage < 90 && percentage >= 60) {
  h1.innerText = `OK, You Know a lil' bit!`;
} else if (percentage < 60) {
  h1.innerText = `Don't stop Believing!, try again`;
}
