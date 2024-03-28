const resultsDiv = document.getElementById("result");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const playResult = document.createElement('div');
let resultSpan = document.createElement('span');
const restartgameButton = document.createElement('button');
let scoreDisplayPanel = document.createElement('div');

restartgameButton.textContent='Restart';

let player1Points=0;
let computer1Points=0;

const resultElementText = document.createTextNode('Result: ');
playResult.appendChild(resultElementText);
playResult.appendChild(resultSpan);

button1.textContent='Rock';
button2.textContent='Paper';
button3.textContent='Scissors';

playResult.appendChild(scoreDisplayPanel);


button1.addEventListener('click', function(){
    result=playRound('rock', getComputerChoice);
    console.log(result);
    resultSpan.innerHTML=result;
});

button2.addEventListener('click', function(){
    result=playRound('paper', getComputerChoice);
    console.log(result);
    resultSpan.innerHTML=result;
});

button3.addEventListener('click', function(){
    result=playRound('scissors', getComputerChoice);
    console.log(result);
    resultSpan.innerHTML=result;
});

restartgameButton.addEventListener('click', function(){
    player1Points=0;
    computer1Points=0;
    scoreDisplayPanel.innerHTML=`\nPlayer: ${player1Points}\nComputer: ${computer1Points}`;
    resultSpan.innerHTML='';
    button1.disabled=false;
    button2.disabled=false;
    button3.disabled=false;
})

resultsDiv.appendChild(button1); 
resultsDiv.appendChild(button2); 
resultsDiv.appendChild(button3);
resultsDiv.appendChild(playResult);


const getComputerChoice=()=>{
    const randomNumber=Math.random();
    let computerChoice;
    if(randomNumber>=0 && randomNumber<(1/3)){
        computerChoice='rock';
    }else if(randomNumber>=(1/3) && randomNumber<(2/3)){
        computerChoice='paper';
    }else if(randomNumber>=(2/3)){
        computerChoice='scissors';
    }
    return computerChoice;
}

var result=null;
const playRound=(playerSelection, computerSelection)=>{
    var playerPlay=playerSelection.toLowerCase();
    computerSelection=getComputerChoice();
    console.log("Player Selection: "+playerPlay);
    console.log("Computer Selection: "+computerSelection);
    if(playerPlay===computerSelection){
        result='Tie';
    }else{
        if((playerPlay==='rock' && computerSelection==='scissors')||
            (playerPlay==='paper' && computerSelection==='rock')||
            (playerPlay==='scissors' && computerSelection==='paper')){
            result='You Win!';
            player1Points=player1Points+1;
        }else{
            result='You Lose!';
            computer1Points=computer1Points+1;
        }
    }

    scoreDisplayPanel.innerHTML=`\nPlayer: ${player1Points}\nComputer: ${computer1Points}`;

    if(player1Points==5){
        result+="\nPlayer wins the game";
        resultsDiv.appendChild(restartgameButton);
        button1.disabled=true;
        button2.disabled=true;
        button3.disabled=true;
    }else if(computer1Points==5){
        result+="\nComputer wins the game";
        resultsDiv.appendChild(restartgameButton);
        button1.disabled=true;
        button2.disabled=true;
        button3.disabled=true;
    }
    return result;
}

