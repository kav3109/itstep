'use strict';

// let title = document.getElementById('title');
// let type = document.getElementById('type');
// let btnSearch = document.querySelector('.btnSearch');


//*********************************************************

const getData = (search, type, page, success) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://www.omdbapi.com/?s=${search}&type=${type}&page=${page}&apikey=9fb989c2`);
    xhr.send();

    xhr.onreadystatechange = () => {
        if(xhr.readyState !== 4) return;
        let loader = document.querySelector('.loader');
        loader.style.display = 'none';
        if(xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            success(json);
        } else {
            console.log(xhr.status+' '+xhr.statusText);
        }
    };

    xhr.onerror = () => {
        console.error('Error!');
    };
};

//*********************************************************


const setItem = (videoPoster, videoType, videotitle, vidoeYear) => {

    let wrapper, item, poster, type, title, year, detail;

    wrapper = document.querySelector('.wrapper');
    item = document.createElement("DIV");
    item.setAttribute("class", "item");
    poster = document.createElement("IMG");
    // poster.setAttribute("src", videoPoster);
    poster.setAttribute("class", "smallPoster");
    poster.setAttribute("alt", "Poster");
    type = document.createElement("SPAN");
    title = document.createElement("H4");
    year = document.createElement("P");
    detail = document.createElement("INPUT");
    detail.setAttribute("type", "button");
    detail.setAttribute("value", "Details");

    wrapper.appendChild(item);
    item.appendChild(poster);
    item.appendChild(type);
    item.appendChild(title);
    item.appendChild(year);
    item.appendChild(detail);

};
setItem();
setItem();
setItem();


getData('hello', 'movie', '1', (json) => {

    if(json.Response === 'False') {
        let films = document.querySelector('.films');
        films.innerText = json.Error;
        return;
    }
    if(+json.totalResults > 10) console.log('More than 10 movies');


    // wrapper.innerText = json.totalResults;
    // wrapper.innerText = json.Type;
    // wrapper.innerText = json.Title;
    // wrapper.innerText = json.Poster;
    // wrapper.innerText = json.Year;
});

