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

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

var books = document.querySelector('#book-list li .name');
// console.log(books);

books = document.querySelectorAll('#book-list li .name');
// console.log(books);

Array.from(books).forEach(function(book){
    console.log(book);
});