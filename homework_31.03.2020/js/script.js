const arrColors = ['#FFFFFF','#D7D7D7','#FFFF00','#B5DCE9','#FFC6D0','#99F099','#F08CF0','#000000','#8A8A8A','#FFAD00','#0000FF','#FF0000','#008A00','#9D00D7'];
const allColorsElements = document.querySelectorAll('.colors > p');
const allFigure = document.querySelectorAll('input[type="radio"]');
const baseSquearSize = 50;
const baseCircleSize = 25;
const baseRhombusSize = 25;
const baseTriagleSize = 50;
let mainColor = '#808080';
let pointX;
let pointY;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const baseY = 186; //lenth to canvas's y=0

// fill color panel
for(let i = 0; i < allColorsElements.length; i++) {
    allColorsElements[i].style.backgroundColor = arrColors[i];
}
// set main color
for(let i = 0; i < allColorsElements.length; i++) {
    allColorsElements[i].onclick = () => {
        mainColor = arrColors[i];
    }
}
// set canvas block width accordint to window size
document.addEventListener("DOMContentLoaded", () => {

    if(window.innerWidth > 1000) {
        (window.innerHeight < document.body.scrollHeight)?//check vertical scroll bar
            canvas.width = window.innerWidth - 17://scroll width
            canvas.width = window.innerWidth
    }    else {
        canvas.width = 1000;
    }
});

//painting
canvas.addEventListener('mousedown', (e)=>{
    pointX = e.pageX;
    pointY = e.pageY;
});
//correct size figure just depends on Y
canvas.addEventListener('mouseup', (e)=>{
    let size;
    if(pointY !== e.pageY) {
        size = pointY - e.pageY;
        if(pointX > e.pageX && pointY < e.pageY) {pointX = e.pageX;}
        if(pointX < e.pageX && pointY > e.pageY) {pointY = e.pageY;}
        if(pointX > e.pageX && pointY > e.pageY) {pointX = e.pageX; pointY = e.pageY;}
        if(allFigure[0].checked === true) paintSquare(pointX, pointY, mainColor, Math.abs(size));
        if(allFigure[1].checked === true) paintCircle(pointX, pointY, mainColor, Math.abs(size/2));
        if(allFigure[2].checked === true) paintRhombus(pointX, pointY, mainColor, Math.abs(size/2));
        if(allFigure[3].checked === true) paintTriangle(pointX, pointY, mainColor, Math.abs(size));
    } else {
        if(allFigure[0].checked === true) paintSquare(e.pageX, e.pageY, mainColor, baseSquearSize);
        if(allFigure[1].checked === true) paintCircle(e.pageX, e.pageY, mainColor, baseCircleSize);
        if(allFigure[2].checked === true) paintRhombus(e.pageX, e.pageY, mainColor, baseRhombusSize);
        if(allFigure[3].checked === true) paintTriangle(e.pageX, e.pageY, mainColor, baseTriagleSize);
    }
});

const paintSquare = (x,y, color, moveTo) => {
    y = y-baseY;
    ctx.fillStyle = color;
    ctx.fillRect(x,y,moveTo,moveTo);
};

const paintCircle = (x,y, color, moveTo) => {
    y = y-baseY;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y + moveTo, moveTo,0,Math.PI*2,true);
    ctx.fill();
};

const paintRhombus = (x,y, color, moveTo) => {
    y = y-baseY;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x + moveTo,y + moveTo);
    ctx.lineTo(x,y + moveTo*2);
    ctx.lineTo(x - moveTo,y + moveTo);
    ctx.lineTo(x,y);
    ctx.fill();
};

const paintTriangle = (x,y,color,moveTo) => {
    y = y-baseY;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,y + moveTo);
    ctx.lineTo(x + moveTo,y + moveTo);
    ctx.fill();
};