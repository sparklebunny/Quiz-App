$(document).ready(function() {

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

	var newGame = 0

	$("#newgame").click(function(e) {
		 $("#question").val('');
		 newGame = 0;
		 $("#answertext").html('');
	});

	
	function processQuestion() {
		if ($("#question").val().length >= 3) {
			var random = Math.floor(Math.random() * responses.length);
			var answer = responses[random];
			// alert(answer);
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

});

	
