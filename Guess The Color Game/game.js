// declaration of global variables and array
// setting the initial values
var colors = [ "blue", "cyan", "gold", "gray", 
"green", "magenta", "orange", "red", 
"white", "yellow" ];
// var colors_length = colors.length;
var target;
var guess_input;
var count = 0;
var finished = false;

// the main game function
function do_game() {
	var target_index = Math.floor(Math.random() * colors.length);
	target = colors[target_index];

	/*
	if (confirm("Want to know the randomly selected color to help you debug/mark the project?")) {
		alert("To help with debugging and/or marking, the randomly selected color is: " + target + "\n");
	}
	*/
	
	while (!finished) {
		guess_input = prompt("I am thinking of one of these colors:"
			+ "\n\n" + colors + "\n\n"
			+ "What color am I thinking of?" + "\n\n"
			+ "Enter 'quit' to stop playing.");
		count++;
		finished = check_guess();
	}

	alert("Thanks for playing!");
}

// check the input
function check_guess() {
	if (guess_input == "quit") {
		if (confirm("Are you sure you want to quit?")) {
			return true;
		}
		else {
			count--;
		}
	}
	else if (colors.indexOf(guess_input) == -1) {
		alert("Sorry, I don't recognize your color."
			+ "\n\n" + "Please try again.");
	// return false;
	}
	else if (guess_input > target) {
		alert("Sorry, your guess is not correct!"
			+ "\n\n" + "Hint: your color is alphabetically higher than mine." + "\n\n"
			+ "Please try again.");
		// return false;
	}
	else if (guess_input < target) {
		alert("Sorry, your guess is not correct!"
			+ "\n\n" + "Hint: your color is alphabetically lower than mine." + "\n\n"
			+ "Please try again.");
		// return false;
	}
	else {
		myBody = document.getElementsByTagName("body")[0];
		myBody.style.background = target;
		alert("Congratulations! You have guessed the color!" + "\n\n" + "It took you " + count
			+ " guesses to finish the game!" + "\n\n" +
			"You can see the colour in the background.");
		return true;
	}
	return false;
}