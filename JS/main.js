function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "A.Cubo Amarillo.") {
		correct++;
}
	if (question2 == "B. 1000 años.") {
		correct++;
}	
	if (question3 == "B. reducir, reciclar y reutilizar") {
		correct++;
	}
	
	var messages = ["YAY!", "Semi YAY", "Para nada YAY"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Tuviste " + correct + " correctas.";
	}