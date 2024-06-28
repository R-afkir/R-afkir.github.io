console.log("Let's roll some dice!");
//dit zijn button variabelen 
let buttonRoll = document.querySelector("button.dice-button");
let buttonHigher = document.querySelector("button.higher-button");
let buttonLower = document.querySelector("button.lower-button");
//dit zijn de computer dice variabelen
let compDice = document.querySelector("div.dice-text-center-computer-dice-one");
let compDice2 = document.querySelector("div.dice-text-center-computer-dice-two");
//dit zijn de player dice variabelen
let playerDice = document.querySelector("div.dice-text-center-player-dice-one");
let playerDice2 = document.querySelector("div.dice-text-center-player-dice-two");
//dit zijn de player nummer variabelen
let playerNum1 = Math.round(Math.random() * (6 - 1) + 1);
let playerNum2 = Math.round(Math.random() * (6 - 1) + 1);
let playerNumWorth = playerNum1 + playerNum2;
//dit zijn de computer nummer variabelen
let computerNum1 = Math.round(Math.random() * (6 - 1) + 1);
let computerNum2 = Math.round(Math.random() * (6 - 1) + 1);
let computerNumWorth = computerNum1 + computerNum2;

// dit zijn de credit variabelen
let playerCredits = document.querySelector("span.player-credits");
let playerScore = 10;

function loseScore() {
    playerCredits.textContent = parseInt(playerCredits.textContent) - 1;
}

function winScore() {
    playerCredits.textContent = parseInt(playerCredits.textContent) + 1;
}
//dit is de roll button event listener
buttonRoll.addEventListener("click", function () {
    computerNum1 = Math.round(Math.random() * (6 - 1) + 1);
    computerNum2 = Math.round(Math.random() * (6 - 1) + 1);

    if (computerNum1 === 1) {
        compDice.innerHTML = `<div>&#9856;</div>`;
    } else if (computerNum1 === 2) {
        compDice.innerHTML = `<div>&#9857;</div>`;
    } else if (computerNum1 === 3) {
        compDice.innerHTML = `<div>&#9858;</div>`;
    } else if (computerNum1 === 4) {
        compDice.innerHTML = `<div>&#9859;</div>`;
    } else if (computerNum1 === 5) {
        compDice.innerHTML = `<div>&#9860;</div>`;
    } else {
        compDice.innerHTML = `<div>&#9861;</div>`;
    }

    if (computerNum2 === 1) {
        compDice2.innerHTML = `<div>&#9856;</div>`;
    } else if (computerNum2 === 2) {
        compDice2.innerHTML = `<div>&#9857;</div>`;
    } else if (computerNum2 === 3) {
        compDice2.innerHTML = `<div>&#9858;</div>`;
    } else if (computerNum2 === 4) {
        compDice2.innerHTML = `<div>&#9859;</div>`;
    } else if (computerNum2 === 5) {
        compDice2.innerHTML = `<div>&#9860;</div>`;
    } else {
        compDice2.innerHTML = `<div>&#9861;</div>`;
    }
});
//dit is the higher button event listener
buttonHigher.addEventListener("click", function () {
    playerNum1 = Math.round(Math.random() * (6 - 0) + 1);
    playerNum2 = Math.round(Math.random() * (6 - 0) + 1);
    playerNumWorth = playerNum1 + playerNum2;

    if (playerNum1 === 1) {
        playerDice.innerHTML = `<div>&#9856;</div>`;
    } else if (playerNum1 === 2) {
        playerDice.innerHTML = `<div>&#9857;</div>`;
    } else if (playerNum1 === 3) {
        playerDice.innerHTML = `<div>&#9858;</div>`;
    } else if (playerNum1 === 4) {
        playerDice.innerHTML = `<div>&#9859;</div>`;
    } else if (playerNum1 === 5) {
        playerDice.innerHTML = `<div>&#9860;</div>`;
    } else {
        playerDice.innerHTML = `<div>&#9861;</div>`;
    }

    if (playerNum2 === 1) {
        playerDice2.innerHTML = `<div>&#9856;</div>`;
    } else if (playerNum2 === 2) {
        playerDice2.innerHTML = `<div>&#9857;</div>`;
    } else if (playerNum2 === 3) {
        playerDice2.innerHTML = `<div>&#9858;</div>`;
    } else if (playerNum2 === 4) {
        playerDice2.innerHTML = `<div>&#9859;</div>`;
    } else if (playerNum2 === 5) {
        playerDice2.innerHTML = `<div>&#9860;</div>`;
    } else {
        playerDice2.innerHTML = `<div>&#9861;</div>`;
    }

    if (playerNumWorth <= computerNumWorth) {
        winScore()
    }  else {
        loseScore()
    }
    //dit deel laat de dice opniew rollen als je er op clickt
    computerNum1 = Math.round(Math.random() * (6 - 1) + 1);
    computerNum2 = Math.round(Math.random() * (6 - 1) + 1);

    if (computerNum1 === 1) {
        compDice.innerHTML = `<div>&#9856;</div>`;
    } else if (computerNum1 === 2) {
        compDice.innerHTML = `<div>&#9857;</div>`;
    } else if (computerNum1 === 3) {
        compDice.innerHTML = `<div>&#9858;</div>`;
    } else if (computerNum1 === 4) {
        compDice.innerHTML = `<div>&#9859;</div>`;
    } else if (computerNum1 === 5) {
        compDice.innerHTML = `<div>&#9860;</div>`;
    } else {
        compDice.innerHTML = `<div>&#9861;</div>`;
    }

    if (computerNum2 === 1) {
        compDice2.innerHTML = `<div>&#9856;</div>`;
    } else if (computerNum2 === 2) {
        compDice2.innerHTML = `<div>&#9857;</div>`;
    } else if (computerNum2 === 3) {
        compDice2.innerHTML = `<div>&#9858;</div>`;
    } else if (computerNum2 === 4) {
        compDice2.innerHTML = `<div>&#9859;</div>`;
    } else if (computerNum2 === 5) {
        compDice2.innerHTML = `<div>&#9860;</div>`;
    } else {
        compDice2.innerHTML = `<div>&#9861;</div>`;
    }
});
//dit is de lower button event listener
buttonLower.addEventListener("click", function () {
    playerNum1 = Math.round(Math.random() * (6 - 1) + 1);
    playerNum2 = Math.round(Math.random() * (6 - 1) + 1);
    playerNumWorth = playerNum1 + playerNum2;

    if (playerNum1 === 1) {
        playerDice.innerHTML = `<div>&#9856;</div>`;
    } else if (playerNum1 === 2) {
        playerDice.innerHTML = `<div>&#9857;</div>`;
    } else if (playerNum1 === 3) {
        playerDice.innerHTML = `<div>&#9858;</div>`;
    } else if (playerNum1 === 4) {
        playerDice.innerHTML = `<div>&#9859;</div>`;
    } else if (playerNum1 === 5) {
        playerDice.innerHTML = `<div>&#9860;</div>`;
    } else {
        playerDice.innerHTML = `<div>&#9861;</div>`;
    }

    if (playerNum2 === 1) {
        playerDice2.innerHTML = `<div>&#9856;</div>`;
    } else if (playerNum2 === 2) {
        playerDice2.innerHTML = `<div>&#9857;</div>`;
    } else if (playerNum2 === 3) {
        playerDice2.innerHTML = `<div>&#9858;</div>`;
    } else if (playerNum2 === 4) {
        playerDice2.innerHTML = `<div>&#9859;</div>`;
    } else if (playerNum2 === 5) {
        playerDice2.innerHTML = `<div>&#9860;</div>`;
    } else {
        playerDice2.innerHTML = `<div>&#9861;</div>`;
    }

    //dit deel laat de dice opniew rollen als je er op clickt
    computerNum1 = Math.round(Math.random() * (6 - 1) + 1);
    computerNum2 = Math.round(Math.random() * (6 - 1) + 1);

    if (computerNum1 === 1) {
        compDice.innerHTML = `<div>&#9856;</div>`;
    } else if (computerNum1 === 2) {
        compDice.innerHTML = `<div>&#9857;</div>`;
    } else if (computerNum1 === 3) {
        compDice.innerHTML = `<div>&#9858;</div>`;
    } else if (computerNum1 === 4) {
        compDice.innerHTML = `<div>&#9859;</div>`;
    } else if (computerNum1 === 5) {
        compDice.innerHTML = `<div>&#9860;</div>`;
    } else {
        compDice.innerHTML = `<div>&#9861;</div>`;
    }

    if (computerNum2 === 1) {
        compDice2.innerHTML = `<div>&#9856;</div>`;
    } else if (computerNum2 === 2) {
        compDice2.innerHTML = `<div>&#9857;</div>`;
    } else if (computerNum2 === 3) {
        compDice2.innerHTML = `<div>&#9858;</div>`;
    } else if (computerNum2 === 4) {
        compDice2.innerHTML = `<div>&#9859;</div>`;
    } else if (computerNum2 === 5) {
        compDice2.innerHTML = `<div>&#9860;</div>`;
    } else {
        compDice2.innerHTML = `<div>&#9861;</div>`;
    }
    if (playerNumWorth <= computerNumWorth) {
        winScore()
    } else {
            loseScore()
    }
});