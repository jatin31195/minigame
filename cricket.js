function reset(){
  localStorage.clear();
  score={
    win:0,
    lose:0,
    tie:0,
  };
  //reset krne par score ko dubara reinitialize kra h 
  document.getElementById('score-text').innerHTML=`Your Score is win=${score.win} ||Lose=${score.lose} ||tie=${score.tie}`;
  stopSound();
}
let scorestr=localStorage.getItem('score');
let score=JSON.parse(scorestr)||
  {
    win:0,
    lose:0,
    tie:0,
  };

// if(scorestr!==undefined){
//   score=JSON.parse(scorestr);

// }
// else{
//   score={
//     win:0,
//     lose:0,
//     tie:0,
//     }
// }

function stopSound() {
  var sound = document.getElementById("cheers");
  sound.pause();
  sound.currentTime = 0; 
}
function playsound(){
 var sound=document.getElementById('cheers');
 sound.play();
}
function win(input){
  stopSound();
  document.getElementById('trp').style.display="none";
  
  function winPop(ratio,opt){
    confetti(Object.assign({},opt,{
      origin:{y:.9},
      particleCount:Math.floor(200*ratio)
    }));
    confetti(.25,{
      spread:30,
      startVelocity:60,
    });
    confetti(.2,{spread:60});
    confetti(.35,{
      spread:100,
      decay:.9,
      scalar:1,
    });
    confetti(.1,{
      spread:130,
      startVelocity:30,
      decay:.92,
      scalar:1.2
    });
    confetti(.2,{
      spread:120,
      startVelocity:45,
    });
  }

let randomNumber=Math.random()*3;
let computerchoice;
let result=document.getElementById('res');
if(randomNumber>0 && randomNumber<=1){
computerchoice='Bat';
}
else if(randomNumber>1&&randomNumber<=2){
  computerchoice='Ball';
}
else{
  computerchoice='Stump';
}

if((input=='Bat')){
if(computerchoice=='Ball'){
  result.innerHTML='you won';
  score.win++;
  document.getElementById('trp').style.display="block";
  winPop();
  playsound();
}
else if(computerchoice=='Bat'){
  result.innerHTML='Game draw';
  score.tie++;
}
else{
  result.innerHTML='Computer won';
  score.lose++;
}
document.getElementById('your-choice').innerHTML=`your choice is ${input}`;

}
else if((input=='Ball')){
  if(computerchoice=='Ball'){
    result.innerHTML='Game Draw';
    score.tie++;
  }
  else if(computerchoice=='Bat'){
    result.innerHTML='Computer won';
    score.lose++;
  }
  else{
    result.innerHTML='you won';
    score.win++;
    document.getElementById('trp').style.display="block";
    winPop();
    playsound();
  }
  document.getElementById('your-choice').innerHTML=`your choice is ${input}`;
}
else{
  if(computerchoice=='Ball'){
    result.innerHTML='Computer won';
    score.lose++;
  }
  else if(computerchoice=='Bat'){
    result.innerHTML='you won';
    score.win++;
    document.getElementById('trp').style.display="block";
    winPop();
    playsound();
  }
  else{
    result.innerHTML='Game Draw';
    score.lose++;
  }
  document.getElementById('your-choice').innerHTML=`your choice is ${input}`;
}
document.getElementById('score-text').style.padding="40px";
document.getElementById('computer-choice').innerHTML=`Computer choice is ${computerchoice}`;
localStorage.setItem('score',JSON.stringify(score));
document.getElementById('score-text').innerHTML=`Your Score is win=${score.win} ||Lose=${score.lose} ||tie=${score.tie}`;
}
