'use strict';

let title = document.getElementById('title');
let type = document.getElementById('type');
let btnSearch = document.querySelector('.btnSearch');
let wrapper = document.getElementById('wrapper');
let loader = document.querySelector('.loader');

    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://www.omdbapi.com/?s=hello&page=2&apikey=9fb989c2');
    xhr.send();
//*********************************************1:08
    xhr.onreadystatechange = () => {
        if(xhr.readyState !== 4) return;
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
        wrapper.innerText = json.totalResults;
    }

// xhr.onprogress = (e) => {
//     (e.lengthComputable)?console.log('Loaded: '+e.loaded+' Total: '+e.total): console.log('No progress');
// };
// }
