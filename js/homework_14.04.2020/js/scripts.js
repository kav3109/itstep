import Api from "./api.js";

const api = new Api();
const user = new Map();

const setUsers = () => {

    const users = document.querySelector('.users');

    api.getData('https://jsonplaceholder.typicode.com/users').then((res) => {
        res.forEach((val,ident,arr) => {
            user.set(arr[ident].name, arr[ident].id);
            let item = document.createElement('DIV');
            item.setAttribute('id',arr[ident].id);
            item.innerText = arr[ident].name;
            users.appendChild(item);
            getUserInfo();
        });
    });
};
setUsers();

const getUserInfo = () => {

    let users = document.querySelectorAll('.users div');
    if(users === null) return;
    users.forEach((val,ident,arr)=>{
        arr[ident].onclick = () => {
            let id = user.get(arr[ident].innerText);
            api.getData(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
                const info = new Map();
                info.set('Name:', res.name);
                info.set('Username:', res.username);
                info.set('Address:', `${res.address.city}, ${res.address.street}`);
                info.set('Email:', res.email);
                info.set('Phone:', res.phone);
                info.set('Website:', res.website);
                setUserInfo(info, id);
            });
        }
    })
};

const setUserInfo = (map, userId) => {

    if(map.length === 0) return;

    let info, column1, column2;
    let infoWrapper = document.querySelector('.infoWrapper');
    let oldInfo = document.querySelector('.info');
    let infoTitle = infoWrapper.querySelector('h4');
    let btn = infoWrapper.querySelector('BUTTON');
    let posts = document.querySelector('.posts');
    let postsTitle = document.querySelector('.postWrapper h4');

    if(infoTitle === null) {
        let title = document.createElement('H4');
        title.innerText = 'User info:';
        infoWrapper.appendChild(title);
    }
    if(oldInfo !== null) oldInfo.remove();
    if(btn !== null) btn.remove();
    if(posts !== null) posts.remove();
    if(postsTitle !== null) postsTitle.remove();

    info = document.createElement('DIV');
    info.setAttribute('class', 'info');
    infoWrapper.appendChild(info);

    map.forEach( (value, key) => {
        column1 = document.createElement('DIV');
        column1.innerText = key;
        column2 = document.createElement('DIV');
        column2.innerText = value;
        info.appendChild(column1);
        info.appendChild(column2);
    });
    btn = document.createElement('BUTTON');
    btn.innerText = 'Show posts';
    infoWrapper.appendChild(btn);

    btn.addEventListener('click', () => {
        getUserPosts(userId);
    })
};

const getUserPosts = (id) => {

    if(id === null) return;

    const posts = new Map();

    api.getData(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then((res) => {
        res.forEach((val,ident,arr) => {

            posts.set(arr[ident].title, arr[ident].body);
        });
        setUserPosts(posts);
    });
};

const setUserPosts = (map) => {

    if(map.length === 0) return;
    let postWrapper = document.querySelector('.postWrapper');
    let oldPosts = document.querySelector('.posts');
    let postsTitle = postWrapper.querySelector('h4');
    let posts, post, title, text;

    if(postsTitle === null) {
        let title = document.createElement('H4');
        title.innerText = "User's posts:";
        postWrapper.appendChild(title);
    }
    if(oldPosts !== null) oldPosts.remove();

    posts = document.createElement('DIV');
    posts.setAttribute('class', 'posts');
    postWrapper.appendChild(posts);

    map.forEach( (value, key) => {

        post = document.createElement('DIV');
        posts.appendChild(post);
        title = document.createElement('H6');
        title.innerText = key;
        post.appendChild(title);
        text = document.createElement('P');
        text.innerText = value;
        post.appendChild(text);

    });
};