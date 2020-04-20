'use strict';

let form = document.forms.searchMovie;

form.addEventListener('submit', () => {

    event.preventDefault();
    let title, type, result, loader;

    title = document.getElementById('title');
    type = document.getElementById('type');
    result = document.querySelector('.films');

    loader = document.createElement("DIV");
    loader.setAttribute("class", "loader");
    loader.innerText = 'Loading...';
    document.body.appendChild(loader);

    getData(title.value, type.value, '1', (json) => {

        if(json.Response === 'False') {
            result.innerText = json.Error;
        } else {
            result.innerText = 'Films:';
            let pages = json.Search.length;
            console.log();
            // if (+json.totalResults > 0) {}
        }


        // wrapper.innerText = json.totalResults;
        // wrapper.innerText = json.Type;
        // wrapper.innerText = json.Title;
        // wrapper.innerText = json.Poster;
        // wrapper.innerText = json.Year;
    });
});

// get json************************************************

const getData = (search, type, page, success) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://www.omdbapi.com/?s=${search}&type=${type}&page=${page}&apikey=9fb989c2`);
    xhr.send();

    xhr.onreadystatechange = () => {
        if(xhr.readyState !== 4) return;
        let loader = document.querySelector('.loader');
        loader.remove();
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

const setItem = (videoPoster, videoType, videotitle, videoYear) => {

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