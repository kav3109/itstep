'use strict';

export default class Api {
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