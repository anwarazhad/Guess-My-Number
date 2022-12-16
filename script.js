'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {

    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        displayMessage('No number! 💩');

        //When Player wins 
    } else if (guess === secretNumber) {
        displayMessage('Correct Number! 🎉');

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //When guess is wrong
    } else if(guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High La! 🤦‍♂️' : 'Too Low La! 🤦‍♀️');
            score--;
            document.querySelector('.score').textContent = score;

        } else {
            displayMessage('LOL YOU LOST 😒');
            document.querySelector('.score').textContent = 0;
        }
    }

});

// When click button again
document.querySelector('.again').addEventListener('click', function() {

    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;      //reset secret number

    displayMessage('Start guessing...');

    document.querySelector('.score').textContent = score;       

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = ' #222';

    document.querySelector('.number').style.width = '15rem';        //width change to default
    
});