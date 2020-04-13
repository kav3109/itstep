let errorEmail = document.querySelector('.email');
let errorPassword = document.querySelector('.password');
let errorRepeat = document.querySelector('.repeat');
let email = document.getElementById('email');
let password = document.getElementById('password');
let repeat = document.getElementById('repeat');
let formSignUp = document.forms.signup;

formSignUp.addEventListener('submit', () => {

    checkEmail();
    checkPassword();
    checkRepeat();
    setCookie();
    location.href='userInfo.html';

});

email.addEventListener('focus', (e) => {
    email.classList.remove('invalid');
    errorEmail.innerText = '';
});

email.addEventListener('blur', (e) => {
    checkEmail();
});

password.addEventListener('focus', (e) => {
    password.classList.remove('invalid');
    errorPassword.innerText = '';
});

password.addEventListener('blur', (e) => {
    checkPassword();
});

repeat.addEventListener('focus', (e) => {
    repeat.classList.remove('invalid');
    errorRepeat.innerText = '';
});

repeat.addEventListener('blur', (e) => {
    checkRepeat();
});

 const checkEmail = () => {
     let text = email.value.toLowerCase();
     if(text.match(/^[\.\-\_a-z]{3,}@[a-z]{1,}\.[a-z]{1,}/) === null) {
         email.classList.add('invalid');
         errorEmail.innerText = 'Email have to contain at least 3 characters or symbols ("-","_",".") before @ and domain name after @ ';
         event.preventDefault();
     }
 };

 const checkPassword = () => {
     let pass = password.value;
     if(pass.length < 6 &&
         pass.match(/0-9/) === null &&
         pass.match(/a-z/) === null &&
         pass.match(/A-Z/) === null) {
         errorPassword.innerText = 'Password have to contain at least 6 symbols and include at least one number and big and small characters';
         event.preventDefault();
     }
 };

 const checkRepeat = () => {
     if(password.value !== repeat.value) {
         errorRepeat.innerText = 'Repeat field have to be equal to password';
         event.preventDefault();
     }
 };

const setCookie = () => {
    let str = `email=${email.value}`;
    document.cookie = `${str}; max-age=3600`;
};