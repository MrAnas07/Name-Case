let personName: String = "";
personName = prompt("What Is Your Name? ") || " ";

let lowercase: String = personName.toLowerCase();
let upercase: String = personName.toUpperCase();
let titlecase: String = personName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if (personName !== null && personName !== ' ') {
    alert(` Hello ${personName}, Here are you name in: 
lowerCase: ${lowercase} 
UperCase: ${upercase}    
TitleCase: ${titlecase} `)
}

else {
    alert(" Plese Fill Your Name ")
}