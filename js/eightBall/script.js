console.log("Now we're ready to begin!")

var ball = document.querySelector("#ball");
var viewPort = document.querySelector("#viewPort")
var responseField = document.querySelector("#responseField")
var questionInput = document.querySelector("#questionInput")
var askButton = document.querySelector("#askButton")
var currQuestion = document.querySelector("#currQuestion")
var innerTest = document.querySelector("#innerTest")

var answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var response = "";

function consultOracle(){
    responseField.innerText = "";
    console.log("Yes it is running our function")
    response = answers[Math.floor(Math.random()*answers.length)]
    ball.classList.add("elementToShake")
    currQuestion.innerText = questionInput.value;
    questionInput.value = "";
    setTimeout(finishConsult,3000)
}

function finishConsult(){
    ball.classList.remove("elementToShake");
    fadeInAnswer();
}

function fadeInAnswer(){
    responseField.innerText = response;
    responseField.classList.add("elementToFadeIn")
    setTimeout(function(){
        responseField.classList.remove("elementToFadeIn")
    },2000)
}


innerTest.innerHTML = "<p>InnerText</p>"