import DomBuilder from './DomBuilder.js';

let form, firstName, lastName;
form = document.forms;
firstName = document.querySelector('#first');
lastName = document.querySelector('#last');

form[0].addEventListener('submit', (event) => {

    if(validation() !== true)  {
        event.preventDefault('submit');
        return;
    }

    setUserData();

});

firstName.addEventListener('focus', (e)=>{
    let el = document.querySelector('.first');
    el.innerText = '*';
});

lastName.addEventListener('focus', (e)=>{
    let el = document.querySelector('.last');
    el.innerText = '*';
});

const validation = () => {
    let errFirst = document.querySelector('.first');
    let errLast = document.querySelector('.last');
    let firstName = document.querySelector('#first');
    let lastName = document.querySelector('#last');

    if(firstName.value === '') {
        errFirst.innerText = 'Field should not be empty!';
        return false;
    }
    if(lastName.value === '') {
        errLast.innerText = 'Field should not be empty!';
        return false;
    }
    return true;
};

const setUserData = () => {

    const domBuilder = new DomBuilder();

    let arr = [], first, last, birthday, gender, country, city, skills, result;

    first = document.querySelector('#first');
    last = document.querySelector('#last');
    birthday = document.querySelector('#birthday');
    gender = document.querySelectorAll('input[type="radio"]');
    country = document.querySelector('#country');
    city = document.querySelector('#state');
    skills = document.querySelectorAll('input[type="checkbox"]');

    gender.forEach((val) => {if(val.checked === true) gender = val.value});
    skills.forEach((val) => {if(val.checked === true) arr.push(val.value)});

    document.body.appendChild(domBuilder.create('h4').withContent('Result:').result);
    form[0].remove();//only for presenting of result
    document.body.appendChild(domBuilder
        .create('div')
        .withClass('result')
        .withChild(
            new DomBuilder().create('p').withContent('Firstname').result,
            new DomBuilder().create('p').withContent(first.value).result,
            new DomBuilder().create('p').withContent('Lastname').result,
            new DomBuilder().create('p').withContent(last.value).result,
            new DomBuilder().create('p').withContent('Birthday').result,
            new DomBuilder().create('p').withContent(birthday.value).result,
            new DomBuilder().create('p').withContent('Gender').result,
            new DomBuilder().create('p').withContent(gender).result,
            new DomBuilder().create('p').withContent('Country').result,
            new DomBuilder().create('p').withContent(country.value).result,
            new DomBuilder().create('p').withContent('City').result,
            new DomBuilder().create('p').withContent(city.value).result,
            new DomBuilder().create('p').withContent('Skills').result,
            new DomBuilder().create('p').withContent(arr.join(', ')).result
        ).result);
};