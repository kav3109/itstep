'use strict';

let title = document.getElementById('title');
let type = document.getElementById('type');
let btnSearch = document.querySelector('.btnSearch');
let wrapper = document.getElementById('wrapper');
let loader = document.querySelector('.loader');

const urlParams = new URLSearchParams(window.location.search);
const ident = urlParams.get('id');

// if (ident) {
    let xhr = new XMLHttpRequest();
xhr.open('GET','http://www.omdbapi.com/?t=runFurious&apikey=9fb989c2');
    // xhr.open('GET',`https://jsonplaceholder.typicode.com/users/${ident}`);
    xhr.send();

    xhr.onload = () => {
        loader.style.display = 'none';
        if(xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            fillData(json);
        } else {
            console.log(xhr.status+' '+xhr.statusText);
        }
    };

    xhr.onerror = () => {
        console.error('Error!');
    };

    function fillData(json) {
        wrapper.innerText = json.name;
    }

// xhr.onprogress = (e) => {
//     (e.lengthComputable)?console.log('Loaded: '+e.loaded+' Total: '+e.total): console.log('No progress');
// };
// }
