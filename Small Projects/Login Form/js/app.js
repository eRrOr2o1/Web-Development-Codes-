const signUpbutton = document.getElementById('signUp');
const signInbutton = document.getElementById('signIn');
const container = document.getElementById('container');
const emailMessage = document.querySelector('.empty-email-message');
const errorEmail = document.querySelector('.invalid-email-message');
const passwordMessage = document.querySelector('.empty-password-message');
const errorPassword = document.querySelector('.invalid-password-message');

signUpbutton.addEventListener('click', ()=> container.classList.add('right-panel-active'));

signInbutton.addEventListener('click', ()=> container.classList.remove('right-panel-active'));

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

