let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#mess");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    console.log("game was drawn.");
    msg.innerText="DRAW  Try again...";
    mess.style.backgroundColor='pink';
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        console.log("you win");
        mess.innerText="YOU WIN !";
        mess.style.backgoundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        console.log("you lose");
        mess.innerText="YOU LOOSE !";
        mess.style.backgroundColor="red";
        
    }
};

const playGame=(userChoice)=>{
    console.log("user  choice",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==="rock"){
            //computer choice scissor,paper
          userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //computer choice scissor,rock
          userWin=compChoice==="scissor"?false:true;
       }
        else{
            //computer choice rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
   
        }
    };
choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{ 
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

