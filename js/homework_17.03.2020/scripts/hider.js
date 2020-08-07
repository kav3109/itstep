'use strict';
let
    info = document.querySelector('.info'), // основной элемент блока
    articles = info.querySelectorAll('.article'), // обертка
    titles = info.querySelectorAll('.article h4'), // заголовок
    texts = info.querySelectorAll('.article p'); // текст

articles[articles.length-1].style.borderBottom = '1px solid black';
function showArticle() {
    for(let i = 0; i < titles.length; i++) {
        titles[i].onclick = function() {
            if(texts[i].hidden === false) {
                texts[i].hidden = true;
                return;
            }
            texts.forEach((item, index, arr) => {
                arr[index].hidden = true;
            });
            texts[i].hidden = false;
            texts[i].style.borderTop = '1px solid black';

        }
    }
}
showArticle();
