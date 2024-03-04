var personName = "";
personName = prompt("What Is Your Name? ") || " ";
var lowercase = personName.toLowerCase();
var upercase = personName.toUpperCase();
var titlecase = personName.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(' ');
if (personName !== null && personName !== ' ') {
    alert(" Hello ".concat(personName, ", Here are you name in: \nlowerCase: ").concat(lowercase, " \nUperCase: ").concat(upercase, "    \nTitleCase: ").concat(titlecase, " "));
}
else {
    alert(" Plese Fill Your Name ");
}
