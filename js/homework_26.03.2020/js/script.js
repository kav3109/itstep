let errorCode = document.querySelector('.code');
let errorColor = document.querySelector('.color');
let colorNames = document.querySelectorAll('.colorName');
let container = document.querySelector('.grid');

document.addEventListener("DOMContentLoaded", () => {
    if(getCookie() !== '') {
        parseCookie(getCookie());
    }

});
btnSave.addEventListener('click', () => {

    if(checkColorName() === false) return;
    if(checkColorCode() === false) return;
    setCookie();
    addColor(color.value, type.value, code.value);
    color.value = '';
    code.value = '';

});

color.addEventListener('input', () => {
    color.classList.remove('invalid');
    errorColor.innerText = '';
});

code.addEventListener('input', () => {
    code.classList.remove('invalid');
    errorCode.innerText = '';
});

type.addEventListener('input', () => {
    code.classList.remove('invalid');
    errorCode.innerText = '';
});

function checkColorName(colorName) {
    if(color.value === '') {
        color.classList.add('invalid');
        errorColor.innerText = 'empty field';
        return false;
    }
    if(color.value.match(/[\W\d_]/)) {
        color.classList.add('invalid');
        errorColor.innerText = 'only leters';
        return false;
    }
    let result = true;
    colorNames.forEach((element) => {
        if(element.innerText.toLowerCase() === color.value.toLowerCase()) {
            color.classList.add('invalid');
            errorColor.innerText = 'color name exists';
            result = false;
        }
    });
    return result;
}

function checkColorCode() {
    let colorType = type.value;
    if(code.value === '') {
        code.classList.add('invalid');
        errorCode.innerText = 'empty field';
        return false;
    }
    if(colorType === 'RGB') {
        if(!code.value.match(/^\d{1,3},\d{1,3},\d{1,3}$/)) {
            code.classList.add('invalid');
            errorCode.innerText = 'RGB should has format 255,255,255';
            return false;
        } else if(checkNumberRgb() === false) {
            code.classList.add('invalid');
            errorCode.innerText = 'RGB section number should be from 0 to 255';
            return false;
        } else {
            return true;
        }
    } else if(colorType === 'RGBA') {
        if(code.value.match(/^\d{1,3},\d{1,3},\d{1,3},\d{1}$/) === null
            && code.value.match(/^\d{1,3},\d{1,3},\d{1,3},[0].[0-9]$/) === null) {
            code.classList.add('invalid');
            errorCode.innerText = 'RGBA should has format 255,255,255,0 or 255,255,255,0.9';
            return false;
        } else if(checkNumberRgb() === false) {
            code.classList.add('invalid');
            errorCode.innerText = 'RGBA\'s first 3 numbers should be from 0 to 255 and last one from 0 to 1';
            return false;
        } else {
            return true;
        }
    } else {
        if(!code.value.match(/^#[a-fA-F0-9]{6}$/)) {
            code.classList.add('invalid');
            errorCode.innerText = 'HEX should has format # + number 0-9 and letters a-f. Example: #ba33df';
            return false;
        } else {
            return true;
        }
    }
}

function checkNumberRgb() {
    let result = true;
    let arr = code.value.split(',');
    arr.forEach((e) => {
        if(+e > 255) result = false;
    });
    if(arr.length === 4) {
        if(+arr[3] > 1){
            result = false;
        }
    }
    return result;
}

function addColor(colorParam, typeParam, codeParam) {
    let wrap, sub, newColor, typeColor, codeColor;

    wrap = document.createElement("DIV");

    sub = document.createElement("DIV");
    sub.setAttribute("class", "info");

    newColor = document.createElement('P');
    newColor.setAttribute("class", "colorName");

    typeColor = document.createElement('P');

    codeColor = document.createElement('P');
    codeColor.setAttribute("class", "codeName");

    container.appendChild(wrap);
    wrap.appendChild(sub);
    sub.appendChild(newColor);
    sub.appendChild(typeColor);
    sub.appendChild(codeColor);

    let array = [];
    if(typeParam === 'RGB') {
        array = codeParam.split(',');
        newColor.innerText = colorParam.toUpperCase();
        wrap.style.backgroundColor = `rgb(${array[0]},${array[1]},${array[2]})`;
        typeColor.innerText = 'RGB';
        codeColor.innerText = array.join(', ').toUpperCase();

    } else if(typeParam === 'RGBA') {
        array = codeParam.split(',');
        newColor.innerText = colorParam.toUpperCase();
        wrap.style.backgroundColor = `rgba(${array[0]},${array[1]},${array[2]},${array[3]})`;
        typeColor.innerText = 'RGBA';
        codeColor.innerText = array.join(', ').toUpperCase();
    } else {
        newColor.innerText = colorParam.toUpperCase();
        wrap.style.backgroundColor =  codeParam;
        typeColor.innerText = 'HEX';
        codeColor.innerText = codeParam.toUpperCase();
    }
}

function setCookie() {
    let str = `${color.value}=${type.value}@${code.value}`;
    document.cookie = `${str}; max-age=10800`;
}

function getCookie() {
    return document.cookie;
}

function parseCookie(str) {
    let params;
    let sections = str.split(';');
    sections.forEach((e)=>{
        params = e.split(/[=|@]/);
        addColor(params[0], params[1], params[2]);
    });
}