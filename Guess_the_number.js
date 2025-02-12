// assigning the "userInput" element to userInput variable
let userInput=document.getElementById("userInput");
// assigning the "gameResult" element to  gameresult variable
let gameResult=document.getElementById("gameResult");

// generating the random number upto 100
let randomNumber=Math.ceil(Math.random()*100);

// printing the random number on console
console.log(randomNumber);

// appliying the logic to guess the numbe
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