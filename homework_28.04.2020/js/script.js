import DomBuilder from './DomBuilder.js';

const items = [
    {
        "id": 1,
        "name": "apple",
        "price": 1.02
    },
    {
        "id": 2,
        "name": "pear",
        "price": 1.52
    },
    {
        "id": 3,
        "name": "banana",
        "price": 2.00
    },
    {
        "id": 4,
        "name": "mango",
        "price": 5.60
    },
    {
        "id": 5,
        "name": "orange",
        "price": 2.35
    },
    {
        "id": 6,
        "name": "lime",
        "price": 3.90
    },
    {
        "id": 7,
        "name": "apricot",
        "price": 4.10
    },
    {
        "id": 8,
        "name": "avocado",
        "price": 5.90
    },
    {
        "id": 9,
        "name": "papaya",
        "price": 7.00
    },
    {
        "id": 10,
        "name": "raspberry",
        "price": 4.60
    },
    {
        "id": 11,
        "name": "lemon",
        "price": 3.45
    }
];
const domBuilder = new DomBuilder();
const sort = document.querySelector('button');
const type = document.querySelector('#type');

sort.addEventListener('click', () => {
    if(type.value === 'id') {
        mySort(items, (a, b) => a.id-b.id);
    } else if(type.value === 'name') {
        mySort(items, (a, b) => {
            let nameA = a.name.toUpperCase(); // ignore upper and lowercase
            let nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;// names must be equal
        });
    } else if(type.value === 'price') {
        mySort(items, (a, b) => a.price-b.price);
    } else {
        console.error('Something went wrong!');
    }
});

const mySort = (arr,cmp) => {
    showItems(arr.sort(cmp));
};

const showItems = (arr) => {
    let wrapper = document.querySelector('.wrapper');
    if (wrapper !== null) wrapper.remove();
    wrapper = domBuilder.create('content').withClass('wrapper').result;
    document.body.appendChild(wrapper);
    arr.forEach((val) => {
        let p1 = domBuilder.create('p').withClass('id').withContent(val.id).result;
        let h3 = domBuilder.create('h3').withClass('name').withContent(val.name.toUpperCase()).result;
        let p2 = domBuilder.create('p').withClass('price').withContent(val.price).result;
        let item = domBuilder.create('div').withClass('item').withChild(p1,h3,p2).result;
        wrapper.appendChild(item);
    });
};
showItems(items);