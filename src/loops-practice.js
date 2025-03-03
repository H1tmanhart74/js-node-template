//Create an array of favorite video games
const videoGames = [
	"Pacific Drive",
	"BeamNG.Drive",
	"Rocket League",
	"Dead by Daylight",
	"Rainbow Six Siege",
	"Minecraft",
];
//Use a for loop to print each game in the array
for (let i = 0; i < videoGames.length; i++) {
	//iterate through the array and print each game
	console.log(`Number ${i + 1}: ${videoGames[i]}`);
	//print the number order and the game name
}
/*
What the code is doing?
The code is a for loop iterating through an array of video games. This means that the for loop will print out each game in the array using the length of the array. As you know arrays will start out at 0, so using the code i + 1 this allows me to go through the array but start at 1 in the number order.

Why I approached it the way I did.
Using the examples shown it was easy to just use them to understand and translate the code to what I'm doing. I just used the examples to help me write out the code as they give proper syntax.
*/
