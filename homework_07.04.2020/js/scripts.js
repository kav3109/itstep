'use strict';

let form = document.forms.searchMovie;

form.addEventListener('submit', () => {

    event.preventDefault();
    let title, type, result, loader, item, pagination;

    title = document.getElementById('title');
    type = document.getElementById('type');
    result = document.querySelector('.films');
    item = document.querySelector('.item');
    pagination = document.querySelector('.pagination');

    if(item !== null) deleteItems();
    if(pagination !== null) pagination.remove();

    loader = document.createElement("DIV");
    loader.setAttribute("class", "loader");
    loader.innerText = 'Loading...';
    document.body.appendChild(loader);

    getData(title.value, type.value, '1', (json) => {

        if(json.Response === 'False') {
            result.innerText = json.Error;
        } else {
            result.innerText = 'Films:';
            let items = json.Search;
            items.forEach((val, id, arr) => {
                let poster = arr[id].Poster;
                if(poster.match(/http/) === null) poster = 'image/no_poster_available.jpg';
                setItem(poster, arr[id].Type, arr[id].Title, arr[id].Year);
            });
            if(+json.totalResults > 10) setPagination(+json.totalResults);
        }
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

const setItem = (videoPoster, videoType, videoTitle, videoYear) => {

    let wrapper, item, poster, type, title, year, detail;

    wrapper = document.querySelector('.wrapper');
    item = document.createElement("DIV");
    item.setAttribute("class", "item");
    poster = document.createElement("IMG");
    poster.setAttribute("src", videoPoster);
    poster.setAttribute("class", "smallPoster");
    poster.setAttribute("alt", "Poster");
    type = document.createElement("SPAN");
    title = document.createElement("H4");
    year = document.createElement("P");
    detail = document.createElement("INPUT");
    detail.setAttribute("type", "button");
    detail.setAttribute("value", "Details");

    type.innerText = videoType;
    title.innerText = videoTitle;
    year.innerText = videoYear;

    wrapper.appendChild(item);
    item.appendChild(poster);
    item.appendChild(type);
    item.appendChild(title);
    item.appendChild(year);
    item.appendChild(detail);

};

const deleteItems = () => {
    let items = document.querySelectorAll('.item');
    items.forEach((val,id,arr) => {
        arr[id].remove();
    });
};

const setPagination = (count) => {

    let wrapper, pagination, a, forward, back, wrapWidth = 105;

    wrapper = document.body;
    pagination = document.createElement("DIV");
    pagination.setAttribute("class", "pagination");
    wrapper.appendChild(pagination);

    back = document.createElement("A");
    back.setAttribute("class", "back");
    back.setAttribute("href", "#");
    back.innerText = '<<';

    forward = document.createElement("A");
    forward.setAttribute("class", "forward");
    forward.setAttribute("href", "#");
    forward.innerText = '>>';

    pagination.appendChild(back);
    (+count > 100)? count = 10: count = Math.ceil((+count)/10);
    for(let i = 1; i <= count; i++) {
        a = document.createElement("A");
        a.setAttribute("href", "#");
        if(i === 1) a.setAttribute("class", "active");
        a.innerText = i;
        pagination.appendChild(a);
        wrapWidth+=43;
    }
    pagination.appendChild(forward);
    pagination.style.width = `${wrapWidth}px`

// <div class="pagination">
//         <a href="#">&laquo;</a>
//         <a href="#">1</a>
//         <a href="#" class="active">2</a>
//         <a href="#">3</a>
//         <a href="#">4</a>
//         <a href="#">5</a>
//         <a href="#">6</a>
//         <a href="#">7</a>
//         <a href="#">8</a>
//         <a href="#">9</a>
//         <a href="#">10</a>
//         <a href="#">&raquo;</a>
//     </div>
};