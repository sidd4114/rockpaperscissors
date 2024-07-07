let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#playmove");
let youscore=document.querySelector("#our_score");
let compscore=document.querySelector("#comp_score");


function computerChoice(){
    let options=["rock","paper","scissors"];   //Math.random generates random no between 0 and 1.
    let compchoice=Math.floor(Math.random()*3) //creating random comp choice
    return options[compchoice];
}

drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Draw! Please Try Again."
};

showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin===true){
    console.log("you win");
    userScore++;
    youscore.innerText=userScore;
    msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
    }
    else{
        compScore++;
        compscore.innerText=compScore;
        msg.innerText=`You Lose! ${compchoice} beats your ${userchoice}`;
        console.log("you lose");
    }
}


function playGame(userchoice){
    console.log("userchoice=",userchoice);
    let compchoice=computerChoice();
    console.log("compchoice=",compchoice); 
    
    if(userchoice===compchoice){
        drawgame();

    }
    else{
        userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            //userchoice=scissors
            userwin=compchoice==="rock"?false:true;
        } 
        showwinner(userwin,userchoice,compchoice);

    }
};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        playGame(userchoice);
        
    });
});