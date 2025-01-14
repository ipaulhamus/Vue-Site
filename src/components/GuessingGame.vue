<template>
<h1 class="align-content-center">Guessing Game!</h1>
  <br />
  <p id="intro-text">Guess a number between 1 and {{ maxNum }}! You have {{ currentGuesses }} guesses left!</p>
  <p id="list-output">Your Previous Guesses: </p>
  <form id="guess-form" v-on:submit.prevent="guess">
  <label for="guess" class="form-label">Enter Your Guess Here:</label><br>
  <input type="number" id="guess" name="guess" class="form-control w-25" required>
  <div class="answer-feedback" id="answer-feedback"></div>
    <br>
  <button type="submit" class="btn btn-success">Guess!</button>
 </form>
  <h3 id="game-results"></h3>
  <button class="btn btn-danger" @click="resetGame" id="play-again" type="button">Play Again?</button>
  <br />
  <br />
  <hr>
 <h3 class="text-secondary">Game Rule Editor</h3>
  <br />
 <form id="game-rules"  v-on:submit.prevent="changeGameParams">
 <label for="upper-bound" class="form-label">Random Number Upper Bound:</label>
 <input type="number" id="upper-bound" name="upper-bound" min="2" max="100" class="form-control w-25" required>
 <br>
   <label for="guess-amount" class="form-label">Guesses Allotted:</label>
   <input type="number" id="guess-amount" name="guess-amount" min="5" max="25" class="form-control w-25" required>
   <br>
   <button type="submit" class="btn btn-warning">Change Rules & Reset Game</button>
 </form>
</template>

<script setup>
let maxGuesses = 20;
let maxNum = 100;
let currentGuesses = 20;
let randomNum = 0;

let guessList = []

function resetGame()
{
  currentGuesses = maxGuesses;
  randomNum = 0;
  guessList = [];
  document.getElementById('intro-text').innerText = `Guess a number between 1 and ${maxNum}! You have ${currentGuesses} guesses left!`;
  document.getElementById('answer-feedback').innerText = "";
  document.getElementById('game-results').innerText = "";
  document.getElementById('list-output').innerText = `${printGuesses()}`;
  document.getElementById('guess-form').style.visibility = 'visible';
  document.getElementById('play-again').style.visibility = 'hidden';
  document.getElementById('guess').value = "";
  document.getElementById('guess-amount').value = "";
  document.getElementById('upper-bound').value = "";
}

function changeGameParams()
{
  const guessInput = document.getElementById('guess-amount').value;
  maxGuesses = guessInput;
  const upperBound = document.getElementById('upper-bound').value;
  maxNum = upperBound;

  resetGame();
}

function guess()
{
  const input = document.getElementById('guess').value;
  guessList.push(input);

  if(randomNum === 0)
  {
    randomNum = Math.floor(Math.random() * maxNum + 1);
    console.log(`random num: ${randomNum}`);
  }

    if(input < randomNum)
    {
      document.getElementById('answer-feedback').innerText = "Oops! Your number is too low!";
      document.getElementById('answer-feedback').style.color = "red";
      currentGuesses--;
      document.getElementById('intro-text').innerText = `Guess a number between 1 and ${maxNum}! You have ${currentGuesses} guesses left!`;
    }
    if(input > randomNum)
    {
      document.getElementById('answer-feedback').innerText = "Oops! Your number is too high!";
      document.getElementById('answer-feedback').style.color = "red";
      currentGuesses--;
      document.getElementById('intro-text').innerText = `Guess a number between 1 and ${maxNum}! You have ${currentGuesses} guesses left!`;
    }
    else if(parseInt(input) === parseInt(randomNum))
    {
      document.getElementById('answer-feedback').innerText = "You Win!";
      document.getElementById('game-results').innerText = `You win! The number was ${ input }! Congratulations!`;
      document.getElementById('game-results').style.color = "green";

      document.getElementById('guess-form').style.visibility = 'hidden';
      document.getElementById('play-again').style.visibility = 'visible';
    }
    document.getElementById('guess').value = "";
    document.getElementById('list-output').innerText = `${printGuesses()}`;
    checkEnd()
}

function checkEnd()
{
  if(currentGuesses === 0)
  {
    document.getElementById('guess-form').style.visibility = 'hidden';
    document.getElementById('play-again').style.visibility = 'visible';
    document.getElementById('game-results').innerText = `You ran out of guesses! You lost!`;
    document.getElementById('game-results').style.color = "red";

  }
}

function printGuesses()
{
  let endString = "Your Previous Guesses: ";
  for(let i = 0; i < guessList.length; i++)
  {
    endString = endString + `${guessList[i]}, `;
  }
  return endString;
}
</script>



<style scoped>
#play-again
{
  visibility: hidden;
}
button
{
  font-size: larger;
}
label, p, #answer-feedback
{
  font-size: large;
  font-weight: bold;
}
h1
{
  color: mediumaquamarine;
  text-decoration: underline;
}
</style>
