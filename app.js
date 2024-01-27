let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");

//Generate Computer Choice
const genCompChoice=() => {
    let option=["Rock","Paper","Scissors"];
    let idx=Math.floor(Math.random()*3);
    return option[idx];
}

//Draw Game
const drawGame=() => {
    msg.innerText="Game Draw! Pick Again";
    msg.style.backgroundColor="black";
}

//Winner Name
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        //User Win
        msg.innerText=`You Wins! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        //User Scoreboard
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        //Computer Win
        msg.innerText=`Computer Wins! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        //Computer Scoreboard
        compScore++;
        computerScorePara.innerText=compScore;
    }
}

//Play Game
const playGame=(userChoice) => {
    const compChoice=genCompChoice();

    //Draw Game
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==='Rock'){
            //computer Choice = scissors,paper
            userWin= compChoice==='Scissors'? true : false;
        }
        else if(userChoice==='Paper'){
            //Computer Choice = Rock, Scissors
            userWin= compChoice==='Rock'?true:false;
        }
        else{
            //Computer Choice = Paper, Rock
            userWin= compChoice==='Paper'?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

// Take User Choice
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});