// Questions from: https://www.prevnet.ca/sites/prevnet.ca/files/standup_2016_bullying_quiz.pdf 

// Code adapted from: https://simplestepscode.com/javascript-quiz-tutorial/

var myQuestions = [
    {
        question: "Cyberbullying is the most common form of bullying.",
        answers: {
            a: 'True',
            b: 'False',
        },
        correctAnswer: 'b'
    },
    {
        question: "If you're being bullied, a good way to make the bullying stop is to tell an adult you trust.",
        answers: {
            a: 'True',
            b: 'False',
        },
        correctAnswer: 'a'
    },
    {
        question: "If you're being bullied, a good way to make the bullying stop is to fight the person who is bullying you.",
        answers: {
            a: 'True',
            b: 'False',
        },
        correctAnswer: 'b'
    },
    {
        question: "Standing up for someone who is being bullied doesn't make the bullying stop.",
        answers: {
            a: 'True',
            b: 'False',
        },
        correctAnswer: 'b'
    },
    {
        question: "The best way you can help someone who is being bullied is to be their friend.",
        answers: {
            a: 'True',
            b: 'False',        },
        correctAnswer: 'a'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">' 
                        + letter + ': ' 
                        + questions[i].answers[letter] + '<br />'
                    + '</label>' 
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}