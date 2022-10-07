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

const list = document.querySelector('#book-list');

//     //delete books
// list.addEventListener('click', function(e){
//     if(e.target.className == 'delete'){
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// })

  // add book list

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    // console.log(value);

 //Create Elements
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

// add content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

// add classes
bookName.classList.add('name');
deleteBtn.classList.add('delete');

// append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);

list.appendChild(li);

});

// hide books

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
  if(hideBox.checked){
    list.style.display = "none";
  }
  else{
    list.style.display = "initial";
  }
});

// filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) !=-1 ) {
      book.style.display = 'block';
    }else{
      book.style.display='none';
    }
  })
})