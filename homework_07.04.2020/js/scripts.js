'use strict';

let form = document.forms.searchMovie;

form.addEventListener('submit', () => {

    event.preventDefault();
    let title, type, loader, item, pagination, detail;

    title = document.getElementById('title');
    type = document.getElementById('type');
    item = document.querySelector('.item');
    pagination = document.querySelector('.pagination');
    detail = document.querySelector('.detail');

    if(item !== null) deleteItems();
    if(pagination !== null) pagination.remove();
    if(detail !== null) deleteDetail(detail);

    loader = document.createElement("DIV");
    loader.setAttribute("class", "loader");
    loader.innerText = 'Loading...';
    document.body.appendChild(loader);

    search(title.value, type.value);

});

const search = (title, type, page) => {

     getSearchResult(title, type, page, (json) => {

        let result = document.querySelector('.films');

        if(json.Response === 'False') {
            result.innerText = json.Error;
        } else {
            result.innerText = 'Films:';
            let items = json.Search;
            items.forEach((val, id, arr) => {
                let poster = arr[id].Poster;
                if (poster.match(/http/) === null) poster = 'image/no_poster_available.jpg';
                setItem(poster, arr[id].Type, arr[id].Title, arr[id].Year, arr[id].imdbID);
            });
            let totalPages = Math.ceil(+json.totalResults / 10);
            if (totalPages > 1 && page === undefined) {
                setPagination(totalPages);
            }
            listenPagination(totalPages, title, type, page);
            showDetail();
        }
    });
};

const getSearchResult = (search, type, page, success) => {

    page = (page === undefined)? 1: page;
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://www.omdbapi.com/?s=${search}&type=${type}&page=${page}&apikey=9fb989c2`);
    xhr.send();

    xhr.onreadystatechange = () => {
        if(xhr.readyState !== 4) return;
        let loader = document.querySelector('.loader');
        if(loader !== null)loader.remove();
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

const getMovieInfo = (id, success) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://www.omdbapi.com/?i=${id}&apikey=9fb989c2`);
    xhr.send();

    xhr.onreadystatechange = () => {
        if(xhr.readyState !== 4) return;
        let loader = document.querySelector('.loader');
        if(loader !== null)loader.remove();
        if(xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            success(json);
        } else {
            console.log(xhr.status+' '+xhr.statusText);
        }
    };

    xhr.onerror = () => {
        if(json.Response === 'False') {
            result.innerText = json.Error;
        }
    };
};

const setItem = (videoPoster, videoType, videoTitle, videoYear, videoId) => {

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
    detail.setAttribute("class", videoId);
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

const deleteDetail = (detail) => {
    let title = document.querySelector('.filmInfo');
    title.remove();
    detail.remove();
};

const setPagination = (countPages, activePage) => {

    let wrapper, pagination, a, forward, back, wrapWidth = 105;

    if(activePage === undefined) activePage = 1;

    wrapper = document.body;
    pagination = document.createElement("DIV");
    pagination.setAttribute("class", "pagination");
    wrapper.appendChild(pagination);

    back = document.createElement("A");
    back.setAttribute("class", "back");
    back.innerText = '<<';

    forward = document.createElement("A");
    forward.setAttribute("class", "forward");
    forward.innerText = '>>';

    pagination.appendChild(back);
    countPages = (+countPages > 10)? 10: countPages;
    for(let i = 1; i <= countPages; i++) {
        a = document.createElement("A");
        if(i === +activePage) a.setAttribute("class", "active");
        a.innerText = i;
        pagination.appendChild(a);
        wrapWidth+=50;//pagination button size
    }
    pagination.appendChild(forward);
    pagination.style.width = `${wrapWidth}px`
};

const listenPagination = (totalPages, title, type) => {

    let detail = document.querySelector('.detail');
    if(detail !== null) deleteDetail(detail);

    let pages = document.querySelectorAll('a');
    pages.forEach((val,id,arr) => {
        arr[id].onclick =() => {
            let active = document.querySelector('.active');
            if(arr[id].className === 'back'){
                deleteItems();
                search(title, type, moveBack());
            }
            if(arr[id].className === ''){
                deleteItems();
                search(title, type, arr[id].innerText);
                active.classList.remove('active');
                arr[id].className = 'active';
            }
            if(arr[id].className === 'forward'){
                deleteItems();
                search(title, type, moveForward(totalPages));
            }
        }
    })
};

const moveForward = (totalPages) => {
    let btns = document.querySelectorAll('a');
    let activePage = document.querySelector('.active');
    let activeNum = +activePage.innerText;
    if(activeNum === +totalPages && +totalPages === btns.length-2) return activeNum;
    if(+btns[1].innerText === 1 && +activeNum !== 10) {
        activePage.classList.remove('active');
        btns[activeNum+1].className = 'active';
        return (activeNum+1);
    }
    activePage.classList.remove('active');
    for (let i = 1; i < btns.length-1; i++) {
        btns[i].innerText = +btns[i].innerText+1;
        if(i === btns.length-2) {
            btns[10].className = 'active';
            return btns[10].innerText;
        }
    }
};

const moveBack = () => {
    let btns = document.querySelectorAll('a');
    let activePage = document.querySelector('.active');
    let activeNum = +activePage.innerText;
    if(+activeNum === 1) return activeNum;
    if(+btns[1].innerText === 1 && +activeNum !== 1) {
        activePage.classList.remove('active');
        btns[activeNum-1].className = 'active';
        return (activeNum-1);
    }
    activePage.classList.remove('active');
    for (let i = 1; i < btns.length-1; i++) {
        btns[i].innerText = +btns[i].innerText-1;
        if(i === btns.length-2) {
            btns[1].className = 'active';
            return btns[1].innerText;
        }
    }
};

const showDetail = () => {

    let allItems = document.querySelectorAll('input[value="Details"]');

    allItems.forEach((val,id,arr) => {
        arr[id].onclick = () => {
            getMovieInfo(arr[id].className, (json) => {

                let detail = document.querySelector('.detail');
                if(detail !== null) deleteDetail(detail);

                let arrTitles = ['Title:','Released:','Genre:','Country:','Director:','Writer:','Actors:','Awards:'];
                let arrDetails = [json.Title, json.Released, json.Genre, json.Country, json.Director, json.Writer, json.Actors, json.Awards];

                let poster = (json.Poster.match(/http/) === null)?'image/no_poster_available.jpg':json.Poster;

                let filmInfo = document.createElement("H3");
                filmInfo.setAttribute("class", "filmInfo");
                filmInfo.innerText = 'Film info:';
                filmInfo.style.paddingTop = '15px';
                document.body.appendChild(filmInfo);

                let wrap = document.createElement("DIV");
                wrap.setAttribute("class", "detail");
                document.body.appendChild(wrap);

                let imgBlock = document.createElement("DIV");
                imgBlock.setAttribute("class", "posterWrapper");
                wrap.appendChild(imgBlock);

                let img = document.createElement("IMG");
                img.setAttribute("src", poster);
                img.setAttribute("class", "bigPoster");
                img.setAttribute("alt", "Poster");
                imgBlock.appendChild(img);

                arrDetails.forEach((val,id,arr)=>{
                    let title = document.createElement("DIV");
                    title.innerText = arrTitles[id];
                    wrap.appendChild(title);

                    let value = document.createElement("DIV");
                    value.innerText = arr[id];
                    wrap.appendChild(value);
                })
            })
        }
    })

};