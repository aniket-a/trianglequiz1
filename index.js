const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answer-btn");
const output1 = document.querySelector("#output");
const correctAnswers = ["90 degree" , "right angled"];
function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);

    for(let value of formResults.values())
    {
     console.log(value)
        if(value === correctAnswers[index])
        {
            score = score + 1 ;
            console.log(score);
        }
            index = index + 1 ;
    }
        
        output1.innerText = "your score is: " + score;
    }                 
submitBtn.addEventListener("click", calculateScore);