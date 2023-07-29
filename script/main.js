var myQuestions =[ 
    {
        question: "What is Stanley Hudsons favorite day?",

        answers: {
            a: 'Bagel Fridays',
            b: 'Taco Tuesday',
            c: 'Pretzel Day'
        },

        correctAnswer: 'Pretzel Day'
    
    },
    {
        question: "What is Phyllis's husband's name and what company does he work for?",

        answers: {
            a: 'Lance Bass, Bass ProShop',
            b: 'Bob Vance, Vance Refridgeration',
            c: 'Mike Dancer, MD Dance Studio'
        },

        correctAnswer: 'Bob Vance, Vance Refridgeration'
    },
    {
        question: "Where did Micheal and Jan go for Christmas Vacation?",

        answers: {
            a: 'Bahamas',
            b: 'Hawaii',
            c: 'Jamaica'
        },

        correctAnswer: 'Jamaica'
    },
    {
        question: "Finish the sentence: Thats what...",

        answers: {
            a: 'she said',
            b: 'Im talking about',
            c: 'happens'
        }, 

        correctAnswer: 'she said'
    }
];
var timerEl =document.querySelector('#timer');
var secondsLeft = 60
function setTime(){
    //sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + "seconds left till quiz is over.";
        if(secondsLeft ===0){
        //stops the timer
        clearInterval(timerInterval);

    }
  }, 1000);
    
}
// countdown ();
setTime()
var qi= -1
//decrement by 5 seconds for every wrong answer but how
function checkAnswer(e) {
    console.log(e.target)
}
var score = 0
document.querySelector("#btn1").addEventListener("click", checkAnswer)
document.querySelector("#btn2").addEventListener("click", checkAnswer)
document.querySelector("#btn3").addEventListener("click", checkAnswer)
document.querySelector("#btn4").addEventListener("click", checkAnswer)
function nextQuestion () {
   console.log(qi)
   qi++
   if(qi < 4){
    document.querySelector("#question").textContent = myQuestions[qi].question
    document.querySelector("#btn1").textContent = myQuestions[qi].answers.a
    document.querySelector("#btn2").textContent = myQuestions[qi].answers.b
    document.querySelector("#btn3").textContent = myQuestions[qi].answers.c
    }
    else{
        document.querySelector("#question").style="display:none"
        document.querySelector("#btn1").style="display:none"
        document.querySelector("#btn2").style="display:none"
        document.querySelector("#btn3").style="display:none"
        document.querySelector("#timer").style="display:none"
        showResults()
    }
}
function showResults(){
    score = secondsLeft
    var initials = prompt("enter your initials")
    var li = document.createElement("li")
    li.textContent = initials + ": " + score
    document.querySelector("#scoreList").appendChild(li)
}
nextQuestion()
document.querySelector("#btn1").addEventListener("click", nextQuestion)
document.querySelector("#btn2").addEventListener("click", nextQuestion)
document.querySelector("#btn3").addEventListener("click", nextQuestion)
function gernerateQuiz(questions, quizContainer, resultsContainer, submitButton) {



    // function showQuestions(questions, quizContainer) {
    //     var output=[];
    //     var answers;
    //     // showQuestions(myQuestions,quizContainer);
    //     // function myQuestions (){
    //     //    [`What is Stanley Hudsons favorite day?`]
        

    //     for(var i=0; i<questions.length; i++){
    //         answers =[
    //             a= false,
    //             b= false,
    //             c= true
    //         ];
    //     }


    // }

    // function showResults(questions, quizContainer,resultsContainer) {
    //     //code goes here
   

    // }
    //when user clickes submit, show results
//     submitButton.onclick = function(){

//         showResults(questions, quizContainer, resultsContainer);
//     }
// }

//     window.setInterval(myTimer,5000)

//     function myTimer() {

    }
    // clearEl.addEventListener('click', function (event) {
    //     event.preventDefault();
    //     textAreaEL.value = '';

    //     for (var i = 0; i < Element.length; i ++){
    //         elements[i].textContent = '';
    //     }

    // })