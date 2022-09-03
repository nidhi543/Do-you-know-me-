var readlineSync = require('readline-sync');

var userName = readlineSync.question("What's your name? ");
console.log("Welcome " + userName + " to DO YOU KNOW ME?");

var arr =[{question:"Which is my favourite color? " ,
          answer: "Pink"},
            {question: "Which is my study major? ",
            answer:"Computer Science"},
            {question: "What I want to become? ",
            answer:"Software Engineer"},
            {question: "Which is my dream company? ",
            answer:"Microsoft"},
            {question: "Am I a Mountain person or Beach person? ",
            answer:"Mountain"},];
  var score = 0;
function quiz(question, answer){
  var userAns = readlineSync.question(question);
  if(userAns.toUpperCase() === answer.toUpperCase()){
    console.log("right!");
    score++;
  }else{
    console.log("wrong!");
  }
    console.log("current score: " + score);
    console.log("--------------");
}
for(var i = 0; i< arr.length; i++){
  quiz(arr[i].question, arr[i].answer);
}
console.log("Total score:" + score);
if(score>=3){
  console.log("You know me.")
}else{
  console.log("We need to spend some more time together.")
}
var highScore =[{
  name:"Nidhi",
  score:5
},
{
  name:"Tanu",
  score:4
}];
console.log("Please check out highest scorers, if you should be there, ping me!");
for(var i = 0 ; i<highScore.length; i++){
  console.log(highScore[i].name + ": "+ highScore[i].score);
}