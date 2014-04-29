$(document).ready(function() {

	var responses = ["it is certain", 
		"it is decidedly so", 
		"without a doubt", 
		"yes, definitely",
		"you may rely on it",
		"as I see it, yes",
		"most likely",
		"outlook good",
		"yes",
		"signs point to yes",
		"reply hazy, try again",
		"ask again later",
		"better not tell you now",
		"cannot predict now",
		"concentrate and ask again",
		"don't count on it",
		"my reply is no",
		"my sources say no",
		"outlook not good",
		"very doubtful"]

	var newGame = 0

	$("#newgame").click(function(e) {
		 $("#question").val('');
		 newGame = 0;
		 $("#answertext").html('');
	});

	
	function processQuestion() {
		var random = Math.floor(Math.random() * responses.length);
		var answer = responses[random];
		// alert(answer);
		$("#answertext").append('<p>' + answer + '</p>');
	};

	$("#question").keypress(function(e) {
		if (e.keyCode === 13) {
			processQuestion();
		}

	});


	$("#triangle").click(processQuestion);

});

	
