// export const getData = (str,success)=> {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','http://www.omdbapi.com/?s=hello&page=2&apikey=9fb989c2');
//     xhr.send();
//
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState !== 4) return;
//         loader.style.display = 'none';
//         if(xhr.status === 200) {
//             let json = JSON.parse(xhr.response);
//             success(json);
//         } else {
//             console.log(xhr.status+' '+xhr.statusText);
//         }
//     };
//
//     xhr.onerror = () => {
//         console.error('Error!');
//     };
// };