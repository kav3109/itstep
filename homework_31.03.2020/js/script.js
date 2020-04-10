let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let baseY = 186;


document.addEventListener("DOMContentLoaded", () => {

    // set canvas block width
    if(window.innerWidth > 1000) {
        (window.innerHeight < document.body.scrollHeight)?//check vertical scroll bar
            canvas.width = window.innerWidth - 17:
            canvas.width = window.innerWidth
    }    else {
        canvas.width = 1000;
    }
});

canvas.addEventListener('mousedown', (e)=>{
    paintTriangle(e.pageX, e.pageY, "#BBBBBB");
});

const paintSquare = (x,y, color) => {
    y = y-baseY;
    ctx.fillStyle = color;
    ctx.fillRect(x,y-baseY,40,40);
};

const paintCircle = (x,y, color) => {
    y = y-baseY;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y + 25,25,0,Math.PI*2,true);
    ctx.fill();
};

const paintRhombus = (x,y, color) => {
    y = y-baseY;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x + 25,y + 25);
    ctx.lineTo(x,y + 50);
    ctx.lineTo(x - 25,y + 25);
    ctx.lineTo(x,y);
    ctx.fill();
};

const paintTriangle = (x,y, color) => {
    y = y-baseY;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,y + 50);
    ctx.lineTo(x + 50,y + 50);
    ctx.fill();
};