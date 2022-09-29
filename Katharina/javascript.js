let sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
let fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

let output = document.getElementById("output");

let mySandwich = JSON.parse(sandwiches);
let myFries = JSON.parse(fries);

output.innerHTML = `My favorite sandwich is a ${mySandwich.sandwich} which has approximately ${mySandwich.calories} calories, along with it I enjoy eating ${myFries.fries_size} which have about ${myFries.calories} calories.`
