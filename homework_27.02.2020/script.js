// 1. digit key ***************************************************************
const checkDigitKey = (key) => {
    return !(key >= '0' && key <= '9');
};

//2. modal ********************************************************************
function darkCover() {
    let coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
    document.body.append(coverDiv);
}
function hideCover() {
    document.getElementById('cover-div').remove();
}
function showModal(text) {
    darkCover();
    let close = document.getElementById('close');
    let container = document.getElementById('modal-cover');
    document.getElementById('modal-message').innerHTML = text;
    document.getElementById('close').style.width = '100%';
    document.getElementById('close').style.padding = '5px';

    function complete() {
        hideCover();
        container.style.display = 'none';
    }

    close.onclick = function() {
        complete();
    };

    container.style.display = 'block';
}

document.getElementById('show-modal').onclick = function() {
    showModal("<h2>Hello from Modal Window!</h2>");
};
//3. lights *****************************************************************

function switchColor() {
    let red = document.getElementById('red');
    let yellow = document.getElementById('yellow');
    let green = document.getElementById('green');
    const checkRed = () => window.getComputedStyle(red).backgroundColor === 'rgb(255, 0, 0)';
    const checkYellow = () => window.getComputedStyle(yellow).backgroundColor === 'rgb(255, 255, 0)';
    const checkGreen = () => window.getComputedStyle(green).backgroundColor === 'rgb(0, 128, 0)';
    if(checkRed() === true) {
        yellow.style.backgroundColor = 'yellow';
        red.style.backgroundColor = 'rgba(255, 255, 255)';
    } else if(checkYellow() === true) {
        green.style.backgroundColor = 'green';
        yellow.style.backgroundColor = 'rgba(255, 255, 255)';
    } else {
        red.style.backgroundColor = 'red';
        green.style.backgroundColor = 'rgba(255, 255, 255)';
    }
}