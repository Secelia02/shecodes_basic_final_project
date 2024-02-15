function contactInfo() {
let name = prompt("What is your name?");
let email = prompt("What is your email address?");
alert(`Thank you ${name}. We'll be in touch!`);
}

let studyWithMe = document.querySelector("button");
studyWithMe.addEventListener("click", contactInfo);