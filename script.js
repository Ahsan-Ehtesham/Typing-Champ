window.addEventListener('load',init);

//Global Variables
let time=20; //20 secs
let score=0; //start score
let isPlaying;


const senInput=document.querySelector('#seninput');
const currentSen=document.querySelector('#currentsen');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('#time');
const message=document.querySelector('#message');

const sentences=[
    'hello you are the most beautiful person alive', 
    'the quick brown fox jumps over the lazy dog', 
    'my cat ate the food that you gave to him',  
    'i really like playing football',
    'i am working on a sweet potato farm',
    'i caught my squirrel rustling through my bag',
    'he told us a very exciting adventure story',
    'the lake is a long way from here',
    'do not step on the broken glass',
    'just go ahead and press that button',
    'the book is in front of the table',
    'please do not be rude',
    'they stated an opinion on how they felt',
    'her presentation was good enough for me',
    'i am skillful because I had a great teacher',
    'they behaved in a respectful manner',
    'he was the strongest among his team'
];

//Initialize Game
function init(){
    // Load sentence from array
    showSentence(sentences);
    senInput.addEventListener('input',startMatch);
    setInterval(countdown,1000);
    setInterval(checkStatus,50);
    
}

function startMatch() {
    if(matchSentences()){
        
        isPlaying=true;
        time=21;
        showSentence(sentences);
        senInput.value='';
        score++;
    }
    if(score===-1){
        scoreDisplay.innerHTML=0;
    }
    else{
        scoreDisplay.innerHTML=score;
    }
}

function matchSentences() {
    if(senInput.value===currentSen.innerHTML){
        message.innerHTML='Correct!!!';
        return true;
    }
    else{
        message.innerHTML='';
        return false;
    }
}

function showSentence(sentences){
    const randIndex=Math.floor(Math.random()*sentences.length);
    currentSen.innerHTML=sentences[randIndex];
}

function countdown() {
    if (time>0){
        time--;
    }
    else if(time==0){
        isPlaying=false;
    }
    timeDisplay.innerHTML=time;
}
function checkStatus() {
    if(!isPlaying && time===0){
        message.innerHTML='Game Over!!!';
        score=-1;
    }
}
//Animations
const $el=document.querySelector('#firsthead');
const duration = 2;
const from = { opacity: 0, ease: Linear.ease };
const to = { opacity: 1 };
function fadeIn() {
    TweenLite.fromTo($el, duration, from, to);
 }
 
 $el.addEventListener('click', fadeIn);

 gsap.from("#instructions",{duration:1,opacity:0,scale:0.3});
 var ex=gsap.timeline({repeat:-1});
 ex.from("#credits", { duration:1.5,opacity:0,ease:"bounce"});
