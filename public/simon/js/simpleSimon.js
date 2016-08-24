$(document).ready(function () {
	"use strict";

// push random numbers into array
	var random;
	var randomArray = [];
	var lightTheButton = function (button, lightSpeed) {	// function created to light button when clicked
		$(button).animate({					
			opacity: 1
		}, lightSpeed).animate({		
			opacity: .5
		}, lightSpeed);
	};
	var roundCounter = 0;					// represents round. Also acts as counter that will iterate through random array

	// current round is directly proportional to maximium length of randomArray
	var switchStatementForButton = function (randomArray) {		// variable created to determine which button will light up 
		setTimeout(function() {						// switch statement allows pause between lights
			switch (randomArray[roundCounter]) {	// cases determine which button will light based on random number generated
				case 1:
					lightTheButton("#green", 500);	// lightTheButton function called to light for half a second
					break;
				case 2:
					lightTheButton("#red", 500);
					break;
				case 3:
					lightTheButton("#yellow", 500);
					break;
				case 4:
					lightTheButton("#blue", 500);
					break;
			};	
			roundCounter++;										// round counter will increment through the array after button is clicked
			if (roundCounter < randomArray.length) {			// as long as roundCounter is less than length of array...
				switchStatementForButton(randomArray);			// buttons will light according to randomArray
			} else {
				userInput();									// allow user input. This will occur after entire randomArray has been iterated
			};
		}, 1000);
	};

	var userInput = function() {
		$(".coloredButton").on("click", function(){						
			var buttonData = parseInt($(this).attr("data-number"));		// variable stores the number value of the data attribute associated with clicked button
			var buttonInput = "#" + $(this).attr("id");					// variable stores the id of clicked button
			lightTheButton(buttonInput, 100);			// lights button with matching id
			$(".coloredButton").off("click");
			compareInputAndArray(buttonData);
		});										// data number stored so as to compare two numeric values(random number and colored botton)

	};

	var addToSequence = function (event) {					// function ccreated to generate random numbers and push into randomArray
		random = Math.floor(Math.random() * 4) + 1;
		console.log("this is random" + random);
		randomArray.push(random);
		console.log(randomArray);

		switchStatementForButton(randomArray);
	};
	$("#start").on("click", function(){		// start button initiates first round 
		addToSequence();
		$('#start').off('click');
	});

	var count = 0;							// variable created to represent user input's position in randomArray
	var compareInputAndArray = function(userInputData) {		
		if (userInputData === randomArray[count]) {
			count++;
			if (count < randomArray.length) {	// if user input is less than randomArray length, then keep allowing user input
				userInput();					
			} else {
				roundCounter = 0;				// if user input reaches randomArray length, reset user input counter
				count = 0;
				addToSequence();

			};
		} else {						// if user input does not match randomArray....then YEEEEEAAAAA  BOOOOOIIIII!!!!!!! (terminates game)
			setTimeout(function() {
				location.reload();
			}, 5000);
			document.getElementById("yeahBoi").play();
			$("body").css("background-image", "url(/simon/,img/joeyAsFlavaFLav.jpg)");
		};
	};
});




