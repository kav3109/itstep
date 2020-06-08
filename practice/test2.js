let interval;
let num = 0;
function do_slide(){
    interval = setInterval(function(){
        console.log(num);
        if(num === 10) clearInterval(interval);
        num++;
    }, 2000);
}
do_slide();


