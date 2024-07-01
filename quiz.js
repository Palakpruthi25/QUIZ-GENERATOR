const quesJSON=[{
    /*category:'Food & Drink',
    id:'qa-1',*/
    correctAnswer:'Three',
    options:['Two','Three','Four','Five'],
    question:
     "How many pieces of bun are there in Mcdonald's big Mac?"
},
{
    correctAnswer:'L. Frank Baum',
    options:['Suzanne Collins','James Fenimore Cooper','L. Frank Baum','Doone Lane'],
    question:"Which author wrote the 'Wonderful wizaed of oz'?",
},
{
    correctAnswer:'Atlanta United',
    options:['Atlanta United','Atlanta Impact','Atlanta Bulls','Atlanta Stars'],
    question:"Which of these is a soccer team in Atlanta?",
},
{
    correctAnswer:'A Nanny',
    options:['A Sow','A Lioness','A Hen','A Nanny'],
    question:"A Female ghost is known as what?",
},
{
    correctAnswer:'P.L. Travers',
    options:['J.R.R. Tolkein','P.L. Travers','Lewis Caroll','Enid Blyton'],
    question:"Which author wrote 'Marry Poppins?",
}
]
let score=0;
let currentQuestion=0;
const totalScore=quesJSON.length;
const questionEl=document.getElementById('question');
const optionsEl=document.getElementById('options');
const scoreEl=document.getElementById('score');
const nextEl=document.getElementById('next');
nextEl.addEventListener('click',()=>{
    scoreEl.textContent=`Score:${score}/${totalScore}`;
    nextQuestion();
})
showQuestion();
function showQuestion(){
const {correctAnswer,options,question}=quesJSON[currentQuestion];
questionEl.textContent=question;
const shuffledOptions=shuffleOptions(options);
shuffledOptions.forEach((opt)=>{
    const btn=document.createElement('button');
    btn.textContent=opt;
    optionsEl.appendChild(btn);
    btn.addEventListener('click',()=>{
        if(opt==correctAnswer){
            score++;
        }
        else{
            score=score-0.25;
        }
        console.log(score);
        scoreEl.textContent=`Score:${score}`;
        nextQuestion();
    })
}
)
}
function nextQuestion(){
    currentQuestion++;
    optionsEl.textContent='';
    if(currentQuestion>=quesJSON){
        questionEl.textContent='Quiz Completed';
        nextEl.remove();
    }
    else{
        showQuestion();
    }
}
function shuffleOptions(options){
    for(let i=options.length-1;i>=0;i--){
        let j=Math.floor(Math.random()*i+1);
        [options[i],options[j]]=[options[j],options[i]];
    }
    return options;
}
