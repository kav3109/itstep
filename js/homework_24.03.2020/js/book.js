let btnSelectAll = book.querySelectorAll(".btnSelect");
let titleAll = book.querySelectorAll(".gridCell > div > h4");

for(let i = 0; i < btnSelectAll.length; i++) {
    btnSelectAll[i].onclick = () => {
        let text = titleAll[i].innerText;
        title.value = text;
        console.log(text);
    }
}
btnBuy.addEventListener('click', () => {
    if(title.value === '' ||
        quantity.value === '' ||
        userName.value === '' ||
        address.value === '' ||
        date.value === '') {
        alert('Some data form is empty!!!');
    } else {
        book.innerHTML = `${userName.value}, thank you for purchase! "${title.value}" will be delivered ${date.value} to ${address.value}`;
    }
});