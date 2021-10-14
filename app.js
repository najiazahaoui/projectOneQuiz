// Array of objects with all questions and correct Answers
const questions = [
    { 
        question: "Quelle est la capitale de la France?",
        answers: [
            { title: "Paris"},
            { title: "Madrid"},
            { title: "New York"},
            { title: "London"},
        ],
        correctAnswer: "Paris",
    },

    { 
        question: "Quelle est la première lettre de l'alphabet?",
        answers: [
            { title: "B"},
            { title: "A"},
            { title: "C"},
            { title: "D"},
        ],
        correctAnswer: "A",
    },

    {
        question: "Quel est le premier jour de la semaine?",
        answers: [
            { title: "Dimanche"},
            { title: "Samedi"},
            { title: "Lundi"},
            { title: "Vendredi"},
        ],
        correctAnswer: "Lundi",
    },

    {
        question: "Quel est le dernier mois de l'année?",
        answers: [
            { title: "Septembre"},
            { title: "Octobre"},
            { title: "Novembre"},
            { title: "Décembre"},
        ],
        correctAnswer: "Décembre",
    },

    {
        question: "Combien d'heure compte une journée?",
        answers: [
            { title: "12"},
            { title: "15"},
            { title: "24"},
            { title: "36"},
        ],
        correctAnswer: "24",
    },
]

let progress = ["Question 1/5", "Question 2/5", "Question 3/5", "Question 4/5", "Question 5/5"];
let score = "0";

// Initialize all questions, progress, score and backgound button (blue) in the quiz 
function initialize(numQuestion){
    document.getElementById("question").textContent = questions[numQuestion].question;
    document.getElementById("guess0").textContent = questions[numQuestion].answers[0].title;
    document.getElementById("guess1").textContent = questions[numQuestion].answers[1].title;
    document.getElementById("guess2").textContent = questions[numQuestion].answers[2].title;
    document.getElementById("guess3").textContent = questions[numQuestion].answers[3].title;
    document.getElementById("progress").textContent = progress[numQuestion];
    document.getElementById("score").textContent = score;
    document.querySelectorAll('.choices button').forEach(function (el){
        el.style.background = "blue"
    });
};


function checkAnswer(numQuestion){
    document.querySelector('.choices').onclick = function(event) {

        // Get the player choice in the variable "playerChoice"
        let playerChoice = event.target.innerHTML;
        console.log(playerChoice);

        // Check if the player choice is the correct answer
        if (playerChoice === questions[numQuestion].correctAnswer) {
            // Add "1" to the variable "score"
            score++;
            document.getElementById("score").textContent = score;
            console.log(score);
        }
        // Set up a green backgound color for when the button with the correct answer
        switch (numQuestion) {
            case 0:
                document.getElementById("guess0").style.background = "green";
                break;
            case 1:
                document.getElementById("guess1").style.background = "green";
                break;
            case 2:
                document.getElementById("guess2").style.background = "green";
                break;
            case 3:
                document.getElementById("guess3").style.background = "green";
                break;
            case 4:
                document.getElementById("guess2").style.background = "green";
                break;
        
            default:
                break;
        };
        
        // As the quiz had 5 questions, we had to run initialize and check the answers for 5 questions
        if (numQuestion < 4) {
            setTimeout(function (){
                numQuestion++
                initialize(numQuestion);
                checkAnswer(numQuestion);
            }, 2000);
        } else if (numQuestion === 4 && score === 5){
            document.querySelectorAll('.choices button').forEach(function (el){
                el.style.visibility = "hidden"
            });
            document.querySelector('h2').style.visibility = "hidden";
            document.querySelector('h4').style.visibility = "visible";
        } else if(numQuestion === 4 && score < 5){
            document.querySelectorAll('.choices button').forEach(function (el){
                el.style.visibility = "hidden"
            });
            document.querySelector('h2').style.visibility = "hidden";
            document.querySelector('h5').style.visibility = "visible";

        }
        
        // You win

        // If "numQuestion" > 4 && score < 5 the player loose
        // Clear the screen
        // You loose

    };

};


initialize(0);
checkAnswer(0);








    

