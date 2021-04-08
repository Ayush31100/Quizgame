    const quizDB = [
    {
        question: "Q1: ARM stands for _________",
        a: "Advanced RISC Machine",
        b: "Advanced RISC Methadology",
        c: "Advanced Reduced Machine",
        d: "Advanced Reduced Methadology",
        ans: "ans1"
    },
    {
        question: "Q2: What is the processor used by ARM7?",
        a: "8-bit CISC",
        b: "8-bit RISC",
        c: "32-bit CISC",
        d: "32-bit RISC",
        ans: "ans4"
    },
    {
        question: "Q3: Which instruction is used to list the registers used for execution?",
        a: "ASSIGN",
        b: "RN",
        c: "PSLOAD",
        d: "ADR",
        ans: "ans2"
    },
    {
        question: "Q4: Explain the address system supported by ARM systems is/are _____",
        a: "Little Endian",
        b: "Big Endian",
        c: "X-Little Endian",
        d: "Both Little & Big Endian",
        ans: "ans4"
    },
    {
        question: "Q5: In the ARM Processor register R15 is a?",
        a: "Stack Pointer",
        b: "Program counter",
        c: "CPSR",
        d: "SPSR",
        ans: "ans2"
    },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const answers = document.querySelectorAll(".answer");
const submit = document.querySelector("#submit");
const showScore = document.querySelector("#showScore");

let questioncount = 0 
let score = 0

const loadQuestion = () => {
    const questionList = quizDB[questioncount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {              
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    
   return answer;
}

const deselectAll=()=>{
    answers.forEach((curAnsElem)=>{
        curAnsElem.checked = false;
    })
}

submit.addEventListener("click",()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questioncount].ans){
        score++;
    };

    questioncount++;

    deselectAll();

    if(questioncount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3>You Scored ${score}/${quizDB.length} ✌️</h3>
        <button class="btn" onclick="location.reload()">Attemp Again</button>
        `;
        showScore.classList.remove("scoreArea");
    }
});