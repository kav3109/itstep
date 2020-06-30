// 1. Z letter
const getZ = (arg) => {
    if(arg < 3) {console.log('Argument should be > 3!'); return;}
    let z = '', e = '';
    for(let i = arg; i > 0; i--) {
        z += '*';
        e += ' ';
    }
    for(let a = arg; a > 0; a--) {
        if(a === arg || a === 1) {
            console.log(z);
        } else {
            console.log(e.slice(0,a-1)+'*');
        }

    }
};
getZ(5);
// 5. data.json
const fs = require('fs-extra');
fs.readJson('data.json', (err, packageObj) => {
    if (err) console.error(err);
    packageObj.forEach((el) => {
        console.log(`Country - ${el.name}(${el.code})`);
    })
});