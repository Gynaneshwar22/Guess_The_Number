let userInput=document.getElementById("userInput");
let gameResult=document.getElementById("gameResult");

let randomNumber=Math.ceil(Math.random()*100);
console.log(randomNumber);

function userValue(){
    let guessNumber= parseInt(userInput.value);
    if(guessNumber>randomNumber){
        gameResult.textContent="Too High, select low number ";
        gameResult.style.backgroundColor="red";
    }
    else if(guessNumber<randomNumber){
        gameResult.textContent="Too low, select high number ";  
        gameResult.style.backgroundColor="red";
    }
    else if(guessNumber===randomNumber){
        gameResult.textContent="You guessed Correctly";
        gameResult.style.backgroundColor="green";
    }
    else{
        gameResult.textContent="Invalid Entry , please enter only NUmber";
        gameResult.style.backgroundColor="red";
    }
}