let formUserInfo= document.forms.userInfo;
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let year = document.getElementById('year');
let gender = document.getElementById('gender');
let phone = document.getElementById('phone');
let skype = document.getElementById('skype');
let exit = document.querySelector('.exit');
let btnSave = document.querySelector('.btnSave');
let hello = document.querySelector('.hello');
let errorEmail = document.querySelector('.email');
let errorPassword = document.querySelector('.password');
let errorRepeat = document.querySelector('.repeat');

const checkCookie = () => {
    let cookies = document.cookie.split(';');
    cookies.forEach((e) => {
        let arr = e.split('=');
        if(arr[0] === 'email') {
            hello.innerText = `Hello, ${arr[1]}!`
        }
    });
};
checkCookie();

exit.addEventListener('click', () => {
    deleteCookies();
    location.href = 'index.html';
});

const deleteCookies = () => {
    let cookies = document.cookie.split(';');
    cookies.forEach((e) => {
        setCookie(e, -1);
    });
};

const setCookie = (cookie, age) => {
    document.cookie = `${cookie}; max-age=${age}`;
};