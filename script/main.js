var myQuestions =[ {
//     {
//         question: "What is Stanley Hudsons favorite day?",

//         answers: {
//             a: 'Bagel Fridays',
//             b: 'Taco Tuesday',
//             c: 'Pretzel Day'
//         },

//         correctAnswer: 'c'
    
//     },
//     {
//         question: "What is Phyllis's husband's name and what company does he work for?",

//         answers: {
//             a: 'Lance Bass, Bass ProShop',
//             b: 'Bob Vance, Vance Refridgeration',
//             c: 'Mike Dancer, MD Dance Studio'
//         },

//         correctAnswer: 'b'
//     },
//     {
//         question: "Where did Micheal and Jan go for Christmas Vacation?",

//         answers: {
//             a: 'Bahamas',
//             b: 'Hawaii',
//             c: 'Jamaica'
//         },

//         correctAnswer: 'c'
//     },
//     {
//         question: "Finish the sentence: Thats what...",

//         answers: {
//             a: 'she said',
//             b: 'Im talking about',
//             c: 'happens'
//         }, 

//         correctAnswer: 'a'
//     }
// ];
    question: "What is Stanly Hudsons favorite day?",
    answers:[
        {text: "Bagel Friday", correct: false},
        {text: "Taco Tuesday", correct: false},
        {text: "Pretzel Day", correct: true},
    ]
}

];



function gernerateQuiz(questions, quizContainer, resultsContainer, submitButton) {



    function showQuestions(questions, quizContainer) {
        var output=[];
        var answers;
        showQuestions(myQuestions,quizContainer);
        function myQuestions (){
           getElementById[`What is Stanley Hudsons favorite day?`]
        
        if (i = 'c', correctAnswer = true);{

        } else {
            answers('a','b' = answers = false)        }


        for(var i=0; i<questions.length; i++){
            answers =[];
        }


    }

    function showResults(questions, quizContainer,resultsContainer) {
        //code goes here

    }

   


    //when user clickes submit, show results
    submitButton.onclick = function(){

        showResults(questions, quizContainer, resultsContainer);
    }
}