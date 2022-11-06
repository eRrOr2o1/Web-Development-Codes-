const emailMessage = document.querySelector('.empty-email-message');
const errorEmail = document.querySelector('.invalid-email-message');
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

form.addEventListener('submit', e => {
    if(email.value){
    const regexMatch =  /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email.value);
    if (regexMatch) {
          errorEmail.textContent = '';
        } else {
          e.preventDefault();
          errorEmail.textContent = 'email is invalid';
          emailMessage.textContent = "";
        }
    } else {
      e.preventDefault();
      emailMessage.textContent = 'You must type in an email';
      errorEmail.textContent = "";
    }

    // When the user clicks on the password field, show the message box
    myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
   }

    // When the user clicks outside of the password field, hide the message box
    myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }

    // When the user starts to type something inside the password field
    myInput.onkeyup = function() {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
  }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    // Validate length
    if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
     }
    }

    // function seterror(id, error) {
    //     //sets error inside tag of id
    // }

});






form.addEventListener('submit', e => {
    if(email.value){
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    if (regexMatch) {
          errorEmail.textContent = '';
        } else {
          e.preventDefault();
          errorEmail.textContent = 'email is invalid';
          emailMessage.textContent = "";
        }
    } else {
      e.preventDefault();
      emailMessage.textContent = 'You must type in an email';
      errorEmail.textContent = "";
    }

    if(password.value){
      var p = document.getElementById('.pass').value;
      if (p.length < 8) {
        e.preventDefault();
        passwordMessage.textContent = 'Your password must be at least 8 characters';
        errorPassword.textContent = '';
      }
      if (p.search(/[a-z]/i) < 0) {
        e.preventDefault();
        errorPassword.textContent = 'Your password must contain at least one letter.';
        passwordMessage.textContent = '';
      }
      if (p.search(/[0-9]/) < 0) {
        e.preventDefault();
        errorPassword.textContent = 'Your password must contain at least one digit.';
        passwordMessage.textContent = '';
      }
    }
    else {
      e.preventDefault();
      passwordMessage.textContent = 'You must type a';
      errorPassword.textContent = "";
    }




});

// function seterror(id, error) {
//     //sets error inside tag of id
// }
