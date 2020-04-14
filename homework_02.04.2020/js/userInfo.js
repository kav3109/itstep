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
let errorFirstName = document.querySelector('.firstName');
let errorLastName = document.querySelector('.lastName');
let errorYear = document.querySelector('.year');
let errorGender = document.querySelector('.gender');
let errorPhone = document.querySelector('.phone');
let errorSkype = document.querySelector('.skype');

const checkCookie = () => {
    let cookies = document.cookie;
    if(cookies === '' || findEmailCookie(cookies) === undefined) {
        location.href = 'index.html';
    } else {
        cookies = cookies.split('; ');
        setUserInfo(cookies);
    }
};
checkCookie();

function findEmailCookie(str) {
    str = str.split(/(; |=)/);
    return str.find(val => val === 'email');
}

function setUserInfo(arr) {
    arr.forEach((e) => {
        let result = e.split('=');
        switch (result[0]) {
            case 'email':
                hello.innerText = `Hello, ${result[1]}!`;
                break;
            case 'firstName':
                firstName.value = result[1];
                break;
            case 'lastName':
                lastName.value = result[1];
                break;
            case 'year':
                year.value = result[1];
                break;
            case 'gender':
                gender.value = result[1];
                break;
            case 'phone':
                phone.value = result[1];
                break;
            case 'skype':
                skype.value = result[1];
                break;
            default:
                console.error('Something went wrong!');
        }
    });
}

formUserInfo.addEventListener('submit', () => {

    checkName(firstName, errorFirstName, 'firstName');
    checkName(lastName, errorLastName, 'lastName');
    checkYear();
    checkGender();

});

exit.addEventListener('click', () => {
    deleteCookies();
    location.href = 'index.html';
});

const deleteCookies = () => {
    let cookies = document.cookie.split('; ');
    cookies.forEach((e) => {
        setCookie(e, -1);
    });
};

const setCookie = (cookie, age) => {
    document.cookie = `${cookie}; max-age=${age}`;
};

firstName.addEventListener('focus', (e) => {
    firstName.classList.remove('invalid');
    errorFirstName.innerText = '';
});

firstName.addEventListener('blur', (e) => {
    checkName(firstName, errorFirstName, 'firstName');
});

lastName.addEventListener('focus', (e) => {
    lastName.classList.remove('invalid');
    errorLastName.innerText = '';
});

lastName.addEventListener('blur', (e) => {
    checkName(lastName, errorLastName, 'lastName');
});

year.addEventListener('focus', (e) => {
    year.classList.remove('invalid');
    errorYear.innerText = '';
});

year.addEventListener('blur', (e) => {
    checkYear();
});

gender.addEventListener('focus', (e) => {
    gender.classList.remove('invalid');
    errorYear.innerText = '';
});

gender.addEventListener('blur', (e) => {
    checkGender();
});

phone.addEventListener('focus', (e) => {
    phone.classList.remove('invalid');
    errorPhone.innerText = '';
});

phone.addEventListener('blur', (e) => {
    checkPhone();
});

const checkName = (name, error, cookieName) => {
    let text = name.value;
    if(text.match(/^[a-zA-Z]{1,20}$/) === null) {
        name.classList.add('invalid');
        error.innerText = 'Only characters and no more 20 symbols without whitespaces';
        event.preventDefault();
    } else {
        setCookie(`${cookieName}=${text}`, 3600);
    }
};

const checkYear = () => {
    let text = year.value;
    let date = new Date();
    let today = date.getFullYear();
    if(text.match(/^\d{1,4}$/) === null || +text < 1900 || +text > today) {
        year.classList.add('invalid');
        errorYear.innerText = `Only digits from 1900 to ${today}`;
    } else {
        setCookie(`year=${text}`, 3600);
    }
};

const checkGender = () => {
    if(gender.value === '') {
        gender.classList.add('invalid');
        errorGender.innerText = 'Empty fied';
    }
    setCookie(`gender =${gender.value}`, 3600);
};

const checkPhone = ()=> {
    let text = phone.value;
    if(text!== '' || text.match()) {
        phone.classList.add('invalid');
        errorPhone.innerText = 'Phone should contain from 10 to 12 digits';
    } else {
        setCookie(`phone=${text}`, 3600);
    }
};