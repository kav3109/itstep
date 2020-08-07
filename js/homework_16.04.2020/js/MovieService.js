export default class MovieService {

    search = async(search, type, page, success) => {
        try {
            let response = await fetch(`http://www.omdbapi.com/?s=${search}&type=${type}&page=${page}&apikey=9fb989c2`);
            success(await response.json());
        } catch (e) {
            console.error(e);
        }
    };

    getMovie = async(id, success) => {
        try {
            let response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=9fb989c2`);
            success(await response.json());
        } catch (e) {
            console.error(e);
        }
    };
}