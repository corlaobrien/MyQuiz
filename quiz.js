var question_num = 0;
var score = 0;
function start_quiz() {
	set_question();
	//alert("You scored " + score + " out of " + questions.length)
}
 
var questions = [   
   {  
		question: "What age is Orla?",
		answer: "26",
		color: "pink",
   },   
   {   
		question: "What is Orla's cat call?",
		answer: "Tiger",
		color: "grey",
	},
	{   
		question: "What does Orla work as?",
		answer: "Software Engineer",
		color: "Blue",	
	},
	{   
		question: "What does Orla not like?",
		answer: "Alert boxes",
		color: "yellow",	
	} 
];
 
 function set_question(){
	 document.getElementById("question").innerHTML = questions[question_num].question;
 } 
 function submit_question() {
	if (questions[question_num].answer == answer )  
	{		
		document.getElementById("answer_comment").innerHTML = "Correct, Well Done!";		
		score = score + 1;		
	} 
	else 
	{		
		document.getElementById("answer_comment").innerHTML = "Wrong, sorry!";		
	}
 }