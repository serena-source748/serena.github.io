 /*
Name: Serena Scaria
Date created: November 12, 2025
Date last edited: November 14, 2025
Version: 1.12
Description: Homework 3 JS Patient Registration Form
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
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zip-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}

//email validation
var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const error = document.getElementById("email-error");

    if (!email) {
        error.innerHTML = "Email can't be blank";
        return false;
    }

    if (!emailR.test(email)) {
        error.innerHTML = "Please enter a valid email address (e.g., name@domain.tld)";
        return false;
    }

    error.innerHTML = "";
    return true;
}

//phone number validation
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    let phone = phoneInput.value.replace(/[^\d]/g, "");

    if (!phone) {
        document.getElementById("phone-error").innerHTML =
        "Phone number can't be blank";
        return false;
    }

    if (phone.length > 3 && phone.length <= 6) {
        phone = phone.slice(0, 3) + "-" + phone.slice(3);
    } else if (phone.length > 6) {
        phone = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6, 10);
    }

    phoneInput.value = phone.slice(0, 12);

    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phone-error").innerHTML =
        "Please enter a valid phone number (e.g., 123-456-7890)";
        return false;
    }

    document.getElementById("phone-error").innerHTML = "";
    return true;
}

//User ID validation
function validateUid() {
    uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML =
        "User ID can't be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML =
        "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML =
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML =
        "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML =
        "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}


//password validation
function validatePword() {
    const pword = document.getElementById("pword").value;
    const uid = document.getElementById("uid").value;
    const error = document.getElementById("pword-error");
    let messages = [];

    if (!pword.match(/[a-z]/)) messages.push("Enter at least one lowercase letter");
    if (!pword.match(/[A-Z]/)) messages.push("Enter at least one uppercase letter");
    if (!pword.match(/[0-9]/)) messages.push("Enter at least one number");
    if (!pword.match(/[!@#$%&*_\-\.+()]/)) messages.push("Enter at least one special character");
    if (pword.includes(uid)) messages.push("Password can't contain user ID");

    error.innerHTML = messages.join("<br>");
    return messages.length === 0;
}

//confirm password validation
function confirmPword() {
  const pword1 = document.getElementById("pword").value;
  const pword2 = document.getElementById("pword2").value;

  if (pword1 !== pword2) {
    document.getElementById("pword2-error").innerHTML = 
    "Passwords don't match";
    return false;
  } else {
    document.getElementById("pword2-error").innerHTML = 
    "Passwords match";
    return true;
  }
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

//alert box functionality
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

//Validation of all fields
function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
     if (!validateMinitial()) {
        valid = false;
    }
     if (!validateLname()) {
        valid = false;
    }
     if (!validateDob()) {
        valid = false;
    }
     if (!validateSsn()) {
        valid = false;
    }
     if (!validateAddress1()) {
        valid = false;
    }
     if (!validateCity()) {
        valid = false;
    }
     if (!validateZip()) {
        valid = false;
    }
     if (!validateEmail()) {
        valid = false;
    }
     if (!validatePhone()) {
        valid = false;
    }
     if (!validateUid()) {
        valid = false;
    }
     if (!validatePword()) {
        valid = false;
    }
     if (!confirmPword()) {
        valid = false;
    }
     if (valid) {
        document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
    }

//City validation
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

//First name validation
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty";
        return false;
      } else if (fname != "") {
          if (!fname.match(namePattern)) {
          document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
          return false;
      } else if (fname.length < 1) {
           document.getElementById("fname-error").innerHTML = "First name cannot be less than 1 character.";
           return false;
      } else if (fname.length > 30) {
           document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
           return false;
      } else {
           document.getElementById("fname-error").innerHTML = "";
           return true;
      }
    }
}

//Middle name validation
function validateMinitial() {
    minitial = document.getElementById("minitial").value.trim();
    var namePattern = /^[A-Z]+$/;
 
    minitial = minitial.toUpperCase();
    document.getElementById("minitial").value = minitial;

    if (!minitial.match(namePattern)) {
        document.getElementById("minitial-error").innerHTML = "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("minitial-error").innerHTML = "";
        return true;
    }
}
     
//Last name validation
function validateLname() {
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty";
        return false;
      } else if (lname != "") {
          if (!lname.match(namePattern)) {
          document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
          return false;
      } else if (lname.length < 2) {
           document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
           return false;
      } else if (lname.length > 30) {
           document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
           return false;
      } else {
           document.getElementById("lname-error").innerHTML = "";
           return true;
      }
    }
}    
  
 
