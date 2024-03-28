// Properly Working code
// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);
// const element = document.getElementById("result");
// element.appendChild(para);

// const secondElement = document.createElement('div');
// const secondElementText = document.createTextNode("This is the second node");
// secondElement.appendChild(secondElementText);
// element.appendChild(secondElement);


const resultsDiv = document.getElementById("result");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const playResult = document.createElement('div');

const resultElementText = document.createTextNode(`This is the end result: ${result}`);
playResult.appendChild(resultElementText);

button1.textContent='Rock';
button2.textContent='Paper';
button3.textContent='Scissors';
// playResult.textContent=resultElementText;


button1.addEventListener('click', function(){
    console.log(playRound('rock', getComputerChoice));
});

button2.addEventListener('click', function(){
    console.log(playRound('paper', getComputerChoice));
});

button3.addEventListener('click', function(){
    console.log(playRound('scissors', getComputerChoice));
});

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
        }else{
            result='You Lose!';
        }
    }
    return result;
}

const playGame=(playerSelection)=>{
    // let button1=<button onclick="playRound('rock')">Rock</button>;
    // let button2=<button onclick="playRound('paper')">Paper</button>;
    // let button3=<button onclick="playRound('scissors')">Scissors</button>;
    // return(
    //     <div>
    //         <button1/>
    //         <button2/>
    //         <button3/>
    //         <div>{result}</div>
    //     </div>
    // );
    
    // while(i<5){
    //     let userInput=prompt(`Plays left: ${5-i}\nPlease Input Rock, paper, or scissors`);
    //     console.log(playRound(userInput, getComputerChoice));
    //     i++
    // }
    console.log('I clicked button 1');
}

// playGame();