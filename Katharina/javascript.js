var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

const output = document.getElementById("output");

const mySandwich = JSON.parse(sandwiches);
const myFries = JSON.parse(fries);

output.innerHTML = `My favorite sandwich is a ${mySandwich.sandwich} which has approximately ${mySandwich.calories} calories, along with it I enjoy eating ${myFries.fries_size} which have about ${myFries.calories} calories.`
