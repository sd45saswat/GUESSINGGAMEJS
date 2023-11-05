const max = prompt("Enter the maximum number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
  if (guess == "quit") {
    console.log("User quit");
    break;
  }

  if (guess == random) {
    console.log("You got the correct answer! Keep it up!");
    break;
  } else if (guess < random) {
    guess = prompt("Your guess was too small. Please try again.");
  } else {
    guess = prompt("Your guess was too large. Please try again.");
  }
}