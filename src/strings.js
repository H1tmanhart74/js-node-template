//Three variables containing my full name, the name of the course I am taking, and my expected grade as a number.
const fullName = "John Hart";
const currentCourseName = "Web Development 1";
const expectedGrade = 85;

//Two message formats, one using string concatenation with quotes and the other using template literals with backticks.

// \/ Biome automatically structured and added that code there.
const sentenceOne =
	// biome-ignore lint/style/useTemplate: <explanation>
	fullName +
	" is taking " +
	currentCourseName +
	" and expects to earn " +
	expectedGrade +
	"%.";
//I don't mind it, but I would prefer to have it like sentenceTwo. It is easier to read for me (Just personal preference).
const sentenceTwo = `${fullName} is taking ${currentCourseName} and expects to earn ${expectedGrade}%.`;

//displays the code in the terminal
console.log(sentenceOne);
console.log(sentenceTwo);
