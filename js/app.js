$(document).ready(function() {

// Responses for 8 ball

	var responses = ["It is certain.", 
		"It is decidedly so.", 
		"Without a doubt.", 
		"Yes, definitely.",
		"You may rely on it.",
		"As I see it, yes.",
		"Most likely.",
		"Outlook good!",
		"Yes!",
		"Signs point to yes!",
		"Reply hazy, try again!",
		"Ask again later.",
		"Better not tell you now.",
		"Cannot predict now.",
		"Concentrate and ask again.",
		"Don't count on it.",
		"My reply is no.",
		"My sources say no way.",
		"Outlook not good.",
		"Very doubtful."]

// New Game

	var newGame = 0

	$("#newgame").click(function(e) {
		 $("#question").val('');
		 newGame = 0;
		 $("#answertext").html('');
	});

// Process the question and return an answer

	function processQuestion() {
		if ($("#question").val().length >= 3) {
			var random = Math.floor(Math.random() * responses.length);
			var answer = responses[random];
			$("#answertext").append('<p>' + answer + '</p>');
		}
		else {
			alert("Please enter a question.");
		}	
		
	};

	$("#question").keypress(function(e) {
		if (e.keyCode === 13) {
			processQuestion();
		}

	});


	$("#triangle").click(processQuestion);

// Game instructions

	$("#howto").click(function(event) {
		alert("Enter a question, then click on the Icosahedron (blue triangle). Your fortune will be told. Yes/No questions are preferred.");
	});

});

	
