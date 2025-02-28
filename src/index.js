const student1 = {
	name: "John",
	course: "Web Development 1",
	grade: 90,
};
const student2 = {
	name: "Matt",
	course: "Python 2",
	grade: 86,
};
const student3 = {
	name: "Alice",
	course: "C#",
	grade: 97,
};
function displayStudentInfo(student) {
	return `${student.name} is taking ${student.course} and expects to earn ${student.grade}%`;
}

console.log(displayStudentInfo(student1));
console.log(displayStudentInfo(student2));
console.log(displayStudentInfo(student3));
