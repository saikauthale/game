function checkNumber(){

    let randomNumber = Math.floor(Math.random()*10)+1;

    let userGuess = document.getElementById("guess").value;

    if(userGuess == randomNumber){
        document.getElementById("result").innerHTML =
        "🎉 You Win!";
    }
    else{
        document.getElementById("result").innerHTML =
        "❌ Try Again. Number was " + randomNumber;
    }

}
