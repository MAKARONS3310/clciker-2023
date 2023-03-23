var score = 0;
var button = document.getElementById("button");
var result = document.getElementById("result");

function clickButton() {
  score++;
  document.getElementById("score").innerHTML = score;
  button.style.backgroundColor = score % 2 == 0 ? "green" : "red";
  button.style.borderRadius = score + "px";
  if (score < 5) {
    result.innerHTML = "You Lose!";
    result.classList.add("lose");
    result.classList.remove("win");
  } else {
    result.innerHTML = "You Win!";
    result.classList.add("win");
    result.classList.remove("lose");
  }
}