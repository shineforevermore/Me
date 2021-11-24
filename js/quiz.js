function check() {

var c=0;

var q1=document.quiz.question1.value;

var q2=document.quiz.question2.value;

var q3=document.quiz.question3.value; 
var q4=document.quiz.question4.value;

var q5=document.quiz.question5.value;

var result=document.getElementById('result'); 
var quiz=document.getElementById("quiz");

if (q1=="Man") {c++}

if (q2=="Queen") {c++}

if (q3=="Yes they did") {c++}

if (q4=="Queen") {c++}

if (q5=="Man") {c++}

quiz.style.display="none";

if (c<=3) {

result.textContent='Your result is not so good please try to work on yourself.'

} 
else {

result.textContent='Your result is awesome. Keep it up!.'
}

}


   
        