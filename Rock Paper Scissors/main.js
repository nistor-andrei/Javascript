/* 
User choices:
-To find what user choice we need to take the button he chose
-addEventListener per choice
-We make a functiion getUserChoice  that verify if the user click the button(rock,paper,scissors) and assign the variable userChoice = (r,p,s)
*/

(function () {
  const rock = document.querySelector('[data-choice=rock]');
  const paper = document.querySelector('[data-choice=paper]');
  const scissors = document.querySelector('[data-choice=scissors]');
  const message = document.querySelector('[data-message]');

  const computerChoice = () => {
    const possibleChoice = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return possibleChoice[randomNumber];
  };

  function updateUserChoice() {
    const pcChoice = computerChoice();
    if (userChoice === pcChoice) {
      message.innerHTML = 'Draw';
      return;
    }

    if (userChoice === 'rock') {
      if (pcChoice === 'paper') {
        message.innerHTML = 'Computer won';
      } else {
        message.innerHTML = 'Player won';
      }
    }

    if (userChoice === 'paper') {
      if (pcChoice === 'scissors') {
        message.innerHTML = 'Computer won';
      } else {
        message.innerHTML = 'Player won';
      }
    }

    if (userChoice === 'scissors') {
      if (pcChoice === 'rock') {
        message.innerHTML = 'Computer won';
      } else {
        message.innerHTML = 'Player won';
      }
    }
  }

  rock.addEventListener('click', function () {
    userChoice = 'rock';
    updateUserChoice();
  });

  paper.addEventListener('click', function () {
    userChoice = 'paper';
    updateUserChoice();
  });

  scissors.addEventListener('click', function () {
    userChoice = 'scissors';
    updateUserChoice();
  });
})();
