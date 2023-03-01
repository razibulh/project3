
//initializing some values

let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

//finding elements

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");


//submit behaviors
form.addEventListener("submit", function(event){
    event.preventDefault();
    attempts++;

    //disable button after the maximum attempts
    if(attempts === 5){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    
    if(attempts<6){
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML =`Remaining attempts : ${totalAttempts - attempts}`;

    }
    //guessingNumber.value= "";

});

//check the random number results
function checkResult(guessingNumber){
    const randomNumber = getRandomNumber(100);

    if(guessingNumber === randomNumber){
        resultText.innerHTML = `Congrats! You have won.`;
        totalWons++;
    }
    else{
        resultText.innerHTML = `You lost ! The number was : ${randomNumber}`;
        totalLosts++;
    }

    lostWonMessage.innerHTML = `Won: ${totalWons} | Lost: ${totalLosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}
//creating random number
function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
}

//reset button
function fun(){
    document.getElementById("myForm").reset();
}