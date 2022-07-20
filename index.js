function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


//fetch object containing 10 books and their corresponding indices

/*
const fetchpractice = fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json)

//create an array of book names, find 5th book
const createArray = (object, keyname) => {
  let newArray = []
  for (const key in object) {
    if (Object.hasOwnProperty(keyname)) {
      newArray.push(object[keyname]);
    };
  }
  return newArray
}
*/



//create an array of characters, for 1031 character

//create var that will add the pages of each book (element in object) 
