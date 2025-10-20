 /*
Name: Serena Scaria
Date created: October 16, 2025
Date last edited: October 16, 2025
Version: 1.0
Description: Homework 2 HTML Patient Registration Form
*/

//date code
window.onload = function() {
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;
};

//household slider code
let slider = document.getElementById("household");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

//date of birth validation
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

 if (date > new Date()) {
    document.getElementById("dob-error").innerHTML = 
    "Date can't be in the future";
    dob.value = "";
    return false;
 } else if (date < new Date(maxDate)) {
    document.getElementById("dob-error").innerHTML = 
    "Date can't be more than 120 years ago";
    dob.value = "";
    return false;
 } else {
    document.getElementById("dob-error").innerHTML = "";
    return true;
 }
}

//ssn validation
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if(!ssnR.test(ssn)) {
       document.getElementById("ssn-error").innerHTML =
       "Please enter a valid SSN";
       return false;
    } else {
       document.getElementById("ssn-error").innerHTML = "";
       return true;
    }
}

//zip code validation
function validateZcode() {
    const zipInput = document.getElementById("zcode").innerHTML = 
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

//email validation
var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//phone number validation
function formatPhone() {
  const phoneInput = document.getElementById("phone");
  let value = phoneInput.value.replace(/\D/g, ""); // remove non-digits

  if (value.length > 3 && value.length <= 6) {
    value = value.slice(0, 3) + "-" + value.slice(3);
  } else if (value.length > 6) {
    value = value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6, 10);
  }

  phoneInput.value = value;
}

function validatePhone() {
  const phoneInput = document.getElementById("phone");
  const error = document.getElementById("phone-error");
  const value = phoneInput.value.trim();

  if (value === "") {
    error.textContent = "Phone number cannot be blank.";
    return false;
  }

  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
  if (!phonePattern.test(value)) {
    error.textContent = "Please enter a valid phone number (e.g., 123-456-7890).";
    return false;
  }

  error.textContent = "";
  return true;
}

//User ID validation
function validateUid() {
  const uidInput = document.getElementById("uid");
  const error = document.getElementById("uid-error");
  const uid = uidInput.value.toLowerCase();
  uidInput.value = uid;

  if (uid.length === 0) {
    error.innerHTML = "User ID can't be blank";
    return false;
  }

  if (!isNaN(uid.charAt(0))) {
    error.innerHTML = "User ID can't start with a number";
    return false;
  }

  const regex = /^[a-zA-Z0-9_-]+$/;
  if (!regex.test(uid)) {
    error.innerHTML = "User ID can only have letters, numbers, underscores, and dashes";
    return false;
  } else if (uid.length < 5) {
    error.innerHTML = "User ID must be at least 5 characters";
    return false;
  } else if (uid.length > 30) {
    error.innerHTML = "User ID can't exceed 30 characters";
    return false;
  }

  error.innerHTML = "";
  return true;
}

//password validation
if (!pword.match(/[a-z]/)) {
  errorMessage.push("Enter at least one lowercase letter");
}
if (!pword.match(/[A-Z]/)) {
  errorMessage.push("Enter at least one uppercase letter");
}
if (!pword.match(/[0-9]/)) {
  errorMessage.push("Enter at least one number");
}
if (!pword.match(/[!@#$%&*_\-\.+()]/)) {
  errorMessage.push("Enter at least one special character");
}
if (pword.includes(uid)) {
  errorMessage.push("Password can't contain user ID");
}

//confirm password validation
function confirmPword() {
  const pword1 = document.getElementById("pword").value;
  const pword2 = document.getElementById("con_pword").value;
  const errorElement = document.getElementById("pword2-error");

  if (pword1 !== pword2) {
    errorElement.textContent = "Passwords don't match";
    return false;
  }

  errorElement.textContent = "Passwords match";
  return true;
}

//review button
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan='3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//removing review data
function removeReview() {
   document.getElementById("showInput").innerHTML = "";
}


     
    
  
 
