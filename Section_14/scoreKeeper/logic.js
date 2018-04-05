
var player1Button = document.querySelector("#player1");
var player2Button = document.querySelector("#player2");
var player1Display = document.querySelector("#player1Score");
var player2Display = document.querySelector("#player2Score");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input[type='number'");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

player1Button.addEventListener("click", function () {
    if (!gameOver){
    p1Score++;   
    if (p1Score === winningScore) {
        player1Display.classList.add("winner");
        console.log("GAME OVER!!!");
        gameOver = true;        
    }
    player1Display.textContent = p1Score;
    }
   
});

player2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;  
     if (p2Score === winningScore) {
         player2Display.classList.add("winner");
         console.log("GAME OVER!!!");
         gameOver = true;
        
     }
    }

    player2Display.textContent = p2Score;
});

resetButton.addEventListener("click", function () {
   reset();
});

// runs any time the value is changed
numInput.addEventListener("change", function () {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();

});

function reset() {
    player1Display.classList.remove("winner");
    player2Display.classList.remove("winner");
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    console.log("The game begins again...");

    player1Display.textContent = p1Score;
    player2Display.textContent = p2Score;
};
