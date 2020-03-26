'use strict';
document.querySelectorAll('#allButtons td').forEach((btn)=> {
    btn.addEventListener('click', onBtnClick);

    function onBtnClick(e) {
        if(tablo.innerHTML === '' &&
            (e.target.innerHTML === '*' ||
                e.target.innerHTML === '=' ||
                e.target.innerHTML === '/' ||
                e.target.innerHTML === '+' ||
                e.target.innerHTML === '-')) return;
        if(tablo.innerHTML.indexOf('=') !== -1) {
            tablo.innerHTML = '';
            return;
        }
        if (e.target.innerHTML === '=') {
            tablo.innerHTML =  tablo.innerHTML + '=' +eval(tablo.innerHTML);
        } else {
            tablo.innerHTML += e.target.innerHTML;
        }
    }
});
