
function playRound(humanChoice, computerChoice) {
    let hscore=0,cscore=0;
    let numberOfRounds=parseInt(prompt("enter the number of rounds"));
    // your code here!
    for(let i=0 ;i<numberOfRounds;i++){
        let humanChoice = getHumanChoice(); 
        let computerChoice = getComputerChoice();
    if (humanChoice==computerChoice)
    {
        console.log("draw");
    }
    if(humanChoice=="rock" && computerChoice=="scissors")
    {console.log("user wins");
        hscore++;
    }
    if(humanChoice=="scissors" && computerChoice=="paper")
    {console.log("user wins");
        hscore++;
    }
    if(humanChoice=="paper" && computerChoice=="rock")
    {console.log("user wins");
        hscore++;
    }
   
    if(computerChoice=="rock" &&  humanChoice=="scissors")
     {console.log("computer wins");
        cscore++;
     }
    if(computerChoice=="scissors" && humanChoice=="paper")
     {console.log("computer wins");
        cscore++;
     }
    if(computerChoice=="paper" && humanChoice=="rock")
     {console.log("computer wins");
        cscore++;
     }
    }

      console.log(`Final score: User ${hscore}, Computer ${cscore}`);
    }
  function getHumanChoice(){
let hum=prompt("pick one from the following rock - paper scissors");
return hum.toLowerCase();
  }
  function getComputerChoice(){
    let comp=["rock","paper","scissors"];
    return comp[Math.floor(Math.random()*comp.length)];
  }
  
  
  
  playRound();
  