//Create an array of three players that have a name, kill count, and a death count
const players = [
	{ name: "H1tmanhart74", kills: 24, deaths: 10 },
	{ name: "Cypher", kills: 26, deaths: 5 },
	{ name: "Mystery", kills: 23, deaths: 12 },
	{ name: "thebestshortbread", kills: 18, deaths: 6 },
];

//keep track of the best player and their K/D ratio
let bestPlayer = players[0];
let bestKillDeathRatio = (bestPlayer.kills / bestPlayer.deaths).toFixed(2);

// Use a loop to display the name, kills, and deaths for each player
for (let i = 0; i < players.length; i++) {
	const player = players[i];
	const killDeathRatio = (player.kills / player.deaths).toFixed(2);

	// Display the player's name, kills, deaths, and kill/death ratio
	console.log(
		`${player.name} has ${player.kills} kills and ${player.deaths} deaths with a kill/death ratio of ${killDeathRatio}`,
	);

	// Update the best player if the current player has a better kill/death ratio
	if (killDeathRatio > bestKillDeathRatio) {
		bestPlayer = player;
		bestKillDeathRatio = killDeathRatio;
	}
}

// Display the player with the best kill/death ratio
console.log(
	`The player with the best kill/death ratio is ${bestPlayer.name} with a ratio of ${bestKillDeathRatio}`,
);

/* 
What my code does:
It starts by creating an array of players with their name, kills, and deaths.  Then we create variables outside of the loop to keep track of the best player and their k/d ratio. Then it loops to display the name, kills, deaths, and K/D ratio for each player. Lastly, with an if statement to determine who the best player is and who has a better K/D ratio it finally displays the player with the best K/D ratio.

Why I took this approach:
I mostly used the examples in the lecture but in order to determine and display the player that had the best k/d I used AI to try and fill in the blanks. AI feels like a cheat code when it comes to writing out the code. It filled out with comments and the code that needed to work in order to determine the best play who had the best k/d.
*/
