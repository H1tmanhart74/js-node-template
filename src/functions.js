//Create a game character description
const character = {
	name: "Hero",
	weapon: "Sword",
	level: 1,
};
function createCharacterDescription(character) {
	return `Level ${character.level} ${character.name} wielding a ${character.weapon}`;
}
console.log(createCharacterDescription(character));
