//Format a full name
const nameInfo = {
	firstName: "John",
	lastName: "Doe",
};
function buildFullName(nameInfo) {
	return `${nameInfo.firstName} ${nameInfo.lastName}`;
}
console.log(buildFullName(nameInfo));
