const url = new URLSearchParams(window.location.search);
const userScore = url.get("score");
const maxPoints = url.get("total");
