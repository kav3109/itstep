'use strict';
class Api {
    constructor(link) {
        this._url = link;
    }

    get url() {
        return this._url;
    }
    set url(x) {
        this._url = x;
    }

    getData = async (url) => {
        try {
            let response = await fetch(url);
            return await response.json();
        } catch (e) {
            console.error(e);
        }
    }
}


const api = new Api();
const user = new Map();
api.getData('https://jsonplaceholder.typicode.com/users').then((res) => {
    res.forEach((val,ident,arr) => {
        user.set(arr[ident].id, arr[ident].name);
    });
});

