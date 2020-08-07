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
    (document.querySelector('.invalid') !== null)? event.preventDefault():location.href='userInfo.html';

});

email.addEventListener('change', (e) => {
    email.classList.remove('invalid');
    errorEmail.innerText = '';
    checkEmail();
});

password.addEventListener('change', (e) => {
    password.classList.remove('invalid');
    errorPassword.innerText = '';
    checkPassword();
});

repeat.addEventListener('change', (e) => {
    repeat.classList.remove('invalid');
    errorRepeat.innerText = '';
    checkRepeat();
});

 const checkEmail = () => {
     let text = email.value.toLowerCase();
     if(text.match(/^[\.\-\_a-z]{3,}@[a-z]{1,}\.[a-z]{1,}/) === null) {
         email.classList.add('invalid');
         errorEmail.innerText = 'Email have to contain at least 3 characters or symbols ("-","_",".") before @ and domain name after @ ';
     }
 };

 const checkPassword = () => {
     let pass = password.value;
     if(pass.length < 6 &&
         pass.match(/0-9/) === null &&
         pass.match(/a-z/) === null &&
         pass.match(/A-Z/) === null) {
         password.classList.add('invalid');
         errorPassword.innerText = 'Password have to contain at least 6 symbols and include at least one number and big and small characters';
     }
 };

 const checkRepeat = () => {
     if(password.value !== repeat.value) {
         repeat.classList.add('invalid');
         errorRepeat.innerText = 'Repeat field have to be equal to password';
     }
 };

const setCookie = () => {
    let str = `email=${email.value}`;
    document.cookie = `${str}; max-age=3600`;
};