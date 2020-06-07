/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
const POSSIBLE_MOVES = ['rock', 'paper', 'scissors'];

function computerPlay() {
  /* Math.random() returns number in [0,1).
   *That * length is in [0,length).
   *Floor that to gain an integer in the bounds of the collection */
  return POSSIBLE_MOVES[Math.floor(Math.random() * POSSIBLE_MOVES.length)];
}

function playRound(playerChoice, computerChoice) {
  const pChoice = POSSIBLE_MOVES.indexOf(playerChoice);
  const cChoice = POSSIBLE_MOVES.indexOf(computerChoice);

  const result = (pChoice + 1) % 3 === cChoice
    ? `Computer wins! ${computerChoice} beats ${playerChoice}`
    : pChoice === cChoice
      ? 'Tie! Nobody wins!'
      : `Player wins! ${playerChoice} beats ${computerChoice}`;
  return result;
}

function checkWinner() {
  if (matchResults.P === Math.floor(bestOf / 2) + 1) return 'player';
  if (matchResults.C === Math.floor(bestOf / 2) + 1) return 'computer';
  if (matchCount === bestOf) {
    return matchResults.P > matchResults.C
      ? 'player'
      : matchResults.C > matchResults.P
        ? 'computer'
        : 'tie';
  }
  return '';
}

function resetGame() {
  reset.hidden = true;
  results.textContent = `Let's play a best of ${bestOf} Rock, Paper, Scissors`;
  matchResults = { C: 0, P: 0, T: 0 };
  matchCount = 0;
  winner = null;
}

function changeBestOf(event) {
  bestOf = Math.abs(+event.target.value) || 5;
  resetGame();
}

function choiceMade(event) {
  const move = event.target.textContent.toLowerCase();
  console.assert(POSSIBLE_MOVES.includes(move), `Illegal move ${move}`);

  let result = playRound(move, computerPlay());
  matchResults[result[0]] += 1;
  matchCount += 1;

  winner = winner || checkWinner();
  if (winner) {
    result = (winner === 'tie'
      ? 'The match ended in a tie!'
      : `The match is over! The ${winner} won!`);
    reset.hidden = false;
  }

  const score = ` P: ${matchResults.P}, C: ${matchResults.C}, T: ${matchResults.T}`;

  results.textContent = result + score;
}

let matchCount = 0;
let matchResults = { C: 0, P: 0, T: 0 };

let bestOf = 5;
let winner;

const buttons = document.querySelectorAll('.choice-btn');
buttons.forEach((button) => button.addEventListener('click', choiceMade));
const results = document.getElementById('results');

const reset = document.getElementById('reset-btn');
reset.addEventListener('click', resetGame);

const bestOfInput = document.getElementById('best-of');
bestOfInput.addEventListener('input', changeBestOf);
