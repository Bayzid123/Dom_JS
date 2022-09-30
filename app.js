// var titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));
// titles.forEach(function(item){
//     console.log(item);
// });

// Array.from(titles).forEach(function(item){
//     console.log(item);
// })

// const wrap = document.querySelector('wrapper');
// console.log(wrap);

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// var books = document.querySelector('#book-list li .name');
// console.log(books);

// books = document.querySelectorAll('#book-list li .name');
// console.log(books);

// Array.from(books).forEach(function(book){
//     console.log(book);
// });

// const banner = document.querySelector('#page-banner');
// console.log('#page-banner node type is:'.banner.nodeType);
// console.log('#page-banner node name is:'.banner.nodeName);
// console.log('#page-banner has child nodes:'.banner.hasChildNodes());


// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

// const bookList = document.querySelector('#book-list')
// console.log('The parent node is:'.bookList.parentNode);
// console.log('The parent element is:'.bookList.parentElement);

// console.log(bookList.childNodes);
// console.log(bookList.children);

// console.log('book-list next siblings is:'.bookList.nextSibling);
// console.log('book-list next siblings is:'.bookList.nextElementSibling);

// console.log('book-list next siblings is:'.bookList.previousSibling);
// console.log('book-list next siblings is:'.bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone else!';

// var btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e) {
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li)
//     });
// });

// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('navigation to', e.target.textContent,'was prevented');
// })