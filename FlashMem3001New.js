var questionsBeginner = [{
    question: "Inside which HTML element do we put the JavaScript?", 
    correctAnswer: "<script>",
    wrongAnswer1: "<js>", 
    wrongAnswer2: "<javascript>", 
    wrongAnswer3: "<div>", 
},
{
    question: 'How do you write "Hello World" in an alert box?', 
    correctAnswer: 'alert("Hello World"); ',
    wrongAnswer1: 'msgBox("Hello World");', 
    wrongAnswer2: 'msg("Hello World");', 
    wrongAnswer3: 'alertBox("Hello World");', 
},
{
    question: 'How can you add a comment in a JavaScript?', 
    correctAnswer: '//This is a comment ',
    wrongAnswer1: '<!--This is a comment-->', 
    wrongAnswer2: '...This is a comment ', 
    wrongAnswer3: '#This is a comment', 
}, {
    question: 'What is the correct way to write a JavaScript array?', 
    correctAnswer: 'var colors = ["red", "green", "blue"]',
    wrongAnswer1: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 
    wrongAnswer2: 'var colors = "red", "green", "blue"', 
    wrongAnswer3: 'var colors = (1:"red", 2:"green", 3:"blue")', 
}
]

var questionsAdvanced = [{
    question: "What is the correct JavaScript syntax to change the content of the HTML element below?", 
    correctAnswer: "document.getElementById('demo').innerHTML = 'Hello World!';",
    wrongAnswer1: '#demo.innerHTML = "Hello World!";', 
    wrongAnswer2: 'document.getElementByName("p").innerHTML = "Hello World!";', 
    wrongAnswer3: 'document.getElement("p").innerHTML = "Hello World!";', 
}, {
    question: 'How do you call a function named "myFunction"?', 
    correctAnswer: 'myFunction()',
    wrongAnswer1: 'call myFunction()', 
    wrongAnswer2: 'function(())', 
    wrongAnswer3: 'call function myFunction()  ', 
}, {
    question: 'How to write an IF statement in JavaScript?', 
    correctAnswer: 'if i == 5 then  ',
    wrongAnswer1: 'call if i = 5 then()', 
    wrongAnswer2: 'if i = 5', 
    wrongAnswer3: 'if (i == 5)', 
}, {
    question: 'How does a WHILE loop start?', 
    correctAnswer: 'while (i <= 10)  ',
    wrongAnswer1: 'while i = 1 to 10', 
    wrongAnswer2: 'while (i <= 10; i++)  ', 
    wrongAnswer3: 'white do (i <= array.length; i++)'
}]

var currentQuestionIndex = 0;
var score = 0;
var advancedMode = false;

function advancedClicked() {
    console.log("advanced clicked")
    advancedMode = true;
    currentQuestionIndex = 0;
    score = 0;
    // start an advanced game!
    displayCurrentQuestionAndAnswers()
}

function getCorrectAnswer(question) {
    let questionSet = getQuestionSet()
    for (let i = 0; i < questionSet.length ; i++) {
        let currentQuestion = questionSet[i];
        let questionString = currentQuestion.question
        if (question == questionString) {
            // found the question object in the list!
            let answer = currentQuestion.correctAnswer;
            return answer;
        }
    }
}

function getCurrentQuestion(){
    let currentQuestion = document.getElementsByClassName('question')[0]
    let valueQuestion = currentQuestion.textContent
    return valueQuestion    
}


function getQuestionSet() {
    // returns the beginner or advances question set, according to `advancedMode`
    let currentQusetions = questionsBeginner
    if (advancedMode == true) {
        currentQusetions = questionsAdvanced
    }
    return currentQusetions
}

function getNextQuestionObj() {
    let questionSet = getQuestionSet()
    console.log(`showing question number ${currentQuestionIndex}`)
    if (currentQuestionIndex >= questionSet.length) {
        return false
    }
    let nextQuestionObj = questionSet[currentQuestionIndex];
    currentQuestionIndex ++;
    return nextQuestionObj
}

function isCorrectAnswer(question, answer) {
    // question is a string as shown to the user
    // answer is a string as shown to the user
    let correctAnswer = getCorrectAnswer(question)
    console.log(`correct answer should be ${correctAnswer}`)
    if (correctAnswer == answer){
        score ++;
        updateScore()
        return true
    }
    return false 
}

function updateScore(){
    let getScoreDiv = document.getElementsByClassName('score')[0].innerText = score
}


function clickAnswer1(){
    genericClickAnswer('card-text a1')
}  

function clickAnswer2(){
    genericClickAnswer('card-text a2')
}  


function clickAnswer3(){
    genericClickAnswer('card-text a3')
}


function clickAnswer4(){
    genericClickAnswer('card-text a4')
}

function genericClickAnswer(clickedClassName) {
    let valueAnswer = document.getElementsByClassName(clickedClassName)[0].textContent
    let question = getCurrentQuestion()
    let isCorrect = isCorrectAnswer(question, valueAnswer)
    displayCurrentQuestionAndAnswers()
}


function openNav(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}


function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function randomAnswers(answer1, answer2, answer3, answer4){
    // return the given answers as a random array
    let arr = [answer1, answer2, answer3, answer4]
    arr.sort(() => Math.random() - 0.5);
    return arr
}

function displayCurrentQuestionAndAnswers(){
    // calling this function makes another round of the game.
    // if the game is over, this function will display "end of game" message
    console.log(`score is ${score}`)
    let nextQuestionObj = getNextQuestionObj()

    if (nextQuestionObj == false) {
        // end of game
        let getQuestionCard = document.getElementsByClassName('gameWindow')[0]
        let getContainer = document.getElementsByClassName('container')[0]
        getQuestionCard.style.display = 'none';
        getContainer.style.display = 'none';
        let getGameOver = document.getElementsByClassName('gameOver')[0]
        getGameOver.innerText = "Game Over!\nYour score is " + score
        getGameOver.style.display = 'block';
        getGameOver.style.background = "#770d0d";
        getGameOver.style.width = "500px";
        getGameOver.style.height = "300px";
        getGameOver.style.color = "white";
        getGameOver.style.display = "flex";
        getGameOver.style.justifyContent = "center";
        getGameOver.style.alignItems = "center";
        getGameOver.style.borderRadius = "101px";
        getGameOver.style.borderColor = "white";
        getGameOver.style.textAlign = "center";
    }

    // question
    let getQuestionCard = document.getElementsByClassName('question')[0]
    getQuestionCard.innerText = nextQuestionObj.question;

    // answer
    let answer1 = nextQuestionObj.correctAnswer
    let answer2 = nextQuestionObj.wrongAnswer1
    let answer3 = nextQuestionObj.wrongAnswer2
    let answer4 = nextQuestionObj.wrongAnswer3 
    let getElement1 = document.getElementsByClassName('card-text a1')[0]
    let getElement2 = document.getElementsByClassName('card-text a2')[0]
    let getElement3 = document.getElementsByClassName('card-text a3')[0]
    let getElement4 = document.getElementsByClassName('card-text a4')[0]
    let randomAnswersArray = randomAnswers(answer1, answer2, answer3, answer4)
    
    getElement1.innerText = randomAnswersArray[0]
    getElement2.innerText = randomAnswersArray[1]
    getElement3.innerText = randomAnswersArray[2]
    getElement4.innerText = randomAnswersArray[3]

}
if (currentQuestionIndex == 0) {
    // start the game!
    displayCurrentQuestionAndAnswers()
}
