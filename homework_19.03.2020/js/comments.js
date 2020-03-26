'use strict';
function addComment() {

    let today = new Date(), subName, subDate, subComment;

    if(myName.value === '' || comment.value === '') return;

    subName = document.createElement("H4");
    subName.setAttribute("class", "name");
    subName.innerText = myName.value;

    subDate = document.createElement('P');
    subDate.setAttribute("class", "date");
    subDate.innerText = parseDate(today);

    subComment = document.createElement("P");
    subComment.setAttribute("class", "text");
    subComment.innerText = comment.value;

    comments.appendChild(subName);
    comments.appendChild(subDate);
    comments.appendChild(subComment);

    function parseDate(date) {
        if (typeof date !== 'object') return 'Wrong passed parameters!';
        let y = date.getFullYear();
        let m = date.getMonth();
        if (m < 10) m = '0' + m;
        let d = date.getDate();
        if (d < 10) d = '0' + d;
        return `${d}.${m}.${y}`;
    }
}
