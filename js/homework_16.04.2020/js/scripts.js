'use strict';

import MovieService from './MovieService.js'
const movieService = new MovieService();

let form = document.forms.searchMovie;

form.addEventListener('submit', (event) => {

    event.preventDefault('submit');
    let title, type, item, more, detail;

    title = document.getElementById('title');
    type = document.getElementById('type');
    item = document.querySelector('.item');
    more = document.querySelector('.more');
    detail = document.querySelector('.detail');

    if(item !== null) deleteItems();
    if(detail !== null) deleteDetail(detail);
    if(more !== null) more.remove();

    setLoader();
    search(title.value, type.value);

});

const search = (title, type) => {

    movieService.search(title, type, 1, (json) => {

        let result = document.querySelector('.films');
        let loader = document.querySelector('.loader');
        if(loader !== null)loader.remove();

        if(json.Response === 'False') {
            result.innerText = json.Error;
        } else {
            result.innerText = 'Films:';
            let items = json.Search;
            items.forEach((val, id, arr) => {
                let poster = arr[id].Poster;
                if (poster.match(/http/) === null) poster = 'image/no_poster_available.jpg';
                setItem(poster, arr[id].Title, arr[id].Year, arr[id].imdbID);
            });
            let totalPages = Math.ceil(+json.totalResults / 10);
            if (totalPages > 1) {
                let btnMore = document.createElement('INPUT');
                btnMore.setAttribute('type', 'button');
                btnMore.setAttribute('class', 'more');
                btnMore.setAttribute('value', 'More');
                document.body.appendChild(btnMore);
            }
            showMore(totalPages, title, type);
            showDetail();
        }
    });
};

const setItem = (videoPoster, videoTitle, videoYear, videoId) => {

    let wrapper, item, poster, type, title, year, detail;

    wrapper = document.querySelector('.wrapper');
    item = document.createElement("DIV");
    item.setAttribute("class", "item");
    poster = document.createElement("IMG");
    poster.setAttribute("src", videoPoster);
    poster.setAttribute("class", "smallPoster");
    poster.setAttribute("alt", "Poster");
    title = document.createElement("H5");
    year = document.createElement("P");
    detail = document.createElement("INPUT");
    detail.setAttribute("class", videoId);
    detail.setAttribute("type", "button");
    detail.setAttribute("value", "Details");

    title.innerText = videoTitle;
    year.innerText = videoYear;

    wrapper.appendChild(item);
    item.appendChild(poster);
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

const showMore = (totalPages, title, type) => {

    let more = document.querySelector('.more');
    let page = 2;

    more.addEventListener('click', () => {

        setLoader();
        more.setAttribute('disabled', 'disabled');
        movieService.search(title, type, page, (json) => {

            let loader = document.querySelector(".loader");
            if (json.Response === 'False') {
                loader.classList = '';
                loader.innerText = json.Error;
            } else {
                loader.remove();
                more.removeAttribute('disabled', 'disabled');
                let items = json.Search;
                items.forEach((val, id, arr) => {
                    let poster = arr[id].Poster;
                    if (poster.match(/http/) === null) poster = 'image/no_poster_available.jpg';
                    setItem(poster, arr[id].Title, arr[id].Year, arr[id].imdbID);
                });
                page++;
                if(+totalPages < +page) {
                    more.remove();
                }
                showDetail();
            }
        });
    });
};

const showDetail = () => {

    let modalOverlay = document.querySelector('.modal-overlay');
    let modal = document.querySelector('.modal');
    let closeModal = document.querySelector('.close-modal');
    let modalContent = document.querySelector('.modal-content');
    let allItems = document.querySelectorAll('input[value="Details"]');

    allItems.forEach((val,id,arr) => {
        arr[id].onclick = () => {
            modalOverlay.removeAttribute('hidden');
            modalOverlay.classList.add('active');
            modal.classList.add('active');
            setLoader(modalContent);
            movieService.getMovie(arr[id].className, (json) => {
                let loader = modalContent.querySelector('.loader');
                loader.remove();
                if(json.Response === 'False') {
                    modalContent.innerText = json.Error;
                } else {
                    let arrTitles = ['Title:','Released:','Genre:','Country:','Director:','Writer:','Actors:','Awards:'];
                    let arrDetails = [json.Title, json.Released, json.Genre, json.Country, json.Director, json.Writer, json.Actors, json.Awards];
                    let poster = (json.Poster.match(/http/) === null)?'image/no_poster_available.jpg':json.Poster;

                    let wrap = document.createElement("DIV");
                    wrap.setAttribute("class", "detail");
                    modalContent.appendChild(wrap);

                    let img = document.createElement("IMG");
                    img.setAttribute("src", poster);
                    img.setAttribute("class", "bigPoster");
                    img.setAttribute("alt", "Poster");
                    wrap.appendChild(img);

                    let description = document.createElement('DIV');
                    description.setAttribute('class', 'description');
                    wrap.appendChild(description);


                    arrDetails.forEach((val,id,arr)=>{
                        let title = document.createElement("DIV");
                        title.innerText = arrTitles[id];
                        title.style.fontWeight = 'bold';
                        description.appendChild(title);

                        let value = document.createElement("DIV");
                        value.innerText = arr[id];
                        description.appendChild(value);
                    });
                }
                closeModal.addEventListener('click', () => {
                    modalOverlay.setAttribute('hidden','hidden');
                    modalOverlay.classList.remove('active');
                    modal.classList.remove('active');
                    modalContent.innerText = '';
                });
                modalOverlay.addEventListener('click', () => {
                    modalOverlay.setAttribute('hidden','hidden');
                    modalOverlay.classList.remove('active');
                    modal.classList.remove('active');
                    modalContent.innerText = '';
                });
            });
        }
    });
};

const setLoader = (parent) => {
    let loader = document.createElement("DIV");
    loader.setAttribute("class", "loader");
    loader.innerText = 'Loading...';
    (parent === undefined)? document.body.appendChild(loader): parent.appendChild(loader);
};