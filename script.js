'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Corect Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 23;

document.querySelector('.guess').value = 43;
console.log(document.querySelector('.guess').value);
*/

let score = Number(document.querySelector('.score').textContent);
// console.log(score-1, typeof score)
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// Handing Score fuction that takes message as a parameter and message is a string
const scoreHandler = message => {
  if (score === 0) {
    document.querySelector('.message').textContent = '🤦‍♂️ GAME OVER';
  } else {
    document.querySelector('.message').textContent = message;
    // decrease score by 1 for each wrong number check out
    score -= 1;
    // console.log(score);
    document.querySelector('.score').textContent = score;
  }
};

// check button EventHandler
document.querySelector('.check').addEventListener('click', () => {
  // when we get a value from user interface its usually 'string'
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  if (!guess) {
    // checking whether the user inputed the number or not
    document.querySelector('.message').textContent = '⛔ Please Enter a Number';
  } else if (guess === secretNumber) {
    // when the player wins the game
    // check for hightScore to set maximum score to highScore
    if (score > highScore) {
      highScore = score;
    }
    if (score !== 0) {
      document.querySelector('.message').textContent = '🤩 Correct Number';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '35rem';
    }
  } else if (guess < secretNumber && Math.abs(guess - secretNumber) > 3) {
    scoreHandler('📈 Too Low');
  } else if (guess > secretNumber && Math.abs(guess - secretNumber) > 3) {
    scoreHandler('📉 Too high');
  } else if (guess - secretNumber < 0 && Math.abs(guess - secretNumber) <= 3) {
    scoreHandler('⬆️ little Low');
  } else if (guess - secretNumber > 0 && Math.abs(guess - secretNumber) <= 3) {
    scoreHandler('⬇️ little High');
  }
});

// Again button EventHandler
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
