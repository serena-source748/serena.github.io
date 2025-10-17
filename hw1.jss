 /*
Name: Serena Scaria
Date created: September 20, 2025
Date last edited: September 20, 2025
Version: 1.0
Description: Homework 1 HTML Patient Registration Form
*/

//date code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//household slider code
let slider = document.getElementById("household");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};
