
let score = JSON.parse(localStorage.getItem
    ("score")) || {
       wins: 0,
       losses: 0,
       ties: 0
     };

     updateScore();


     let isAutoPlaying = false;
     let intervalId;

     //const autoPlay = () => {
        // autoPlay function as an arrow function(regular function is preferred);
     //};
     function autoPlay() {

        if (!isAutoPlaying) {
            intervalId = setInterval(() => {
                const playerMove = pickComputerMove();
                playGame(playerMove);
            }, 1000);

            isAutoPlaying = true;
        } else {
            clearInterval(intervalId);
            isAutoPlaying = false;
        }
     } 

     document.querySelector(".auto-play").addEventListener("click", () => {
        if (!isAutoPlaying) {
            intervalId = setInterval(() => {
                const playerMove = pickComputerMove();
                playGame(playerMove);
                document.querySelector(".auto-play").innerHTML = "Stop Playing";
            }, 1000);
            isAutoPlaying = true;
        } else {
            
            clearInterval(intervalId);
            isAutoPlaying = false;
            document.querySelector(".auto-play").innerHTML = "Auto Play";
           
        }
     });


     document.querySelector(".js-rock-button").addEventListener("click", () => {
      playGame("rock");
     });

     document.querySelector(".js-paper-button").addEventListener("click", () => {
      playGame("paper");
     });

     document.querySelector(".js-scissors-button").addEventListener("click", () => {
      playGame("scissors");
     });

     document.querySelector(".reset").addEventListener("click", () => {
            showResetConfirmation();
    });

     document.body.addEventListener("keydown", (event) => {
      if (event.key === "r") {
        playGame("rock");
      } else if (event.key === 'p') {
        playGame("paper");
      } else if (event.key === "s") {
        playGame("scissors");
      } else if (event.key === "a") {
        autoPlay();
      } else if (event.key === "Backspace") {
        showResetConfirmation();
      
      }
     });
     
 function playGame(playerMove) {

   const computerMove = pickComputerMove();

   let result = "";

     if (playerMove == "rock") {
       if (computerMove == "rock") {
         result = "Tie";
       } else if (computerMove == "paper") {
         result = "You Lose";
       } else if (computerMove == "scissors") {
         result = "You Win";
       }
     }
     
     else if (playerMove == "paper") {
       if (computerMove == "rock") {
         result = "You Win";
       } else if (computerMove == "paper") {
         result = "Tie";
       } else if (computerMove == "scissors") {
         result = "You Lose";
       }
     }

     else if (playerMove == "scissors") {
       if (computerMove == "rock") {
         result = "You Lose";
       } else if (computerMove == "paper") {
         result = "You Win";
       } else if (computerMove == "scissors") {
         result = "Tie";
       }
     }

     if (result == "You Win") {
       score.wins += 1;
     } else if (result == "You Lose") {
       score.losses += 1;
     } else if (result == "Tie") {
       score.ties += 1;
     }


     document.querySelector(".show").innerHTML = result;

     document.querySelector(".moves").innerHTML = `You <img src="./images/${playerMove}-emoji.png" class="move-icon">
 <img src="images/${computerMove}-emoji.png" class="move-icon">
 Computer`; 
    
     localStorage.setItem('score', JSON.stringify(score));

     updateScore();

 }


 function updateScore() {
   document.querySelector(".score").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.ties}`;
 }






function pickComputerMove() {

   const randomNumber = Math.random();
   let computerMove = "";

   if (randomNumber >= 0 && randomNumber < 1 / 3 ) {
     computerMove = "rock";
   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
     computerMove = "paper";
   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
     computerMove = "scissors";
   }

   return computerMove;

}

document.querySelector(".reset").addEventListener("click", () => {

});

function showResetConfirmation() {
    document.querySelector(".reset-confirmation").innerHTML = `
        Are you sure you want to reset the score?
        <button class = "reset-confirm-yes reset-confirm-button">
         Yes
        </button>
        <button class = "reset-confirm-no reset-confirm-button">
         No
        </button>
    `;


    document.querySelector(".reset-confirm-yes").addEventListener("click", () => {
        resetScore();
        hideResetConfirmation();
    });

    document.querySelector(".reset-confirm-no").addEventListener("click", () => {
        hideResetConfirmation();
    });
}

function hideResetConfirmation() {
    document.querySelector(".reset-confirmation").innerHTML = '';
}

function resetScore() {
    score.wins = 0,
    score.losses = 0,
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
}