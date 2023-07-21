function getTittles(bookList){
    return bookList.map((book)=> book.title);
}

function sortTittles(title){
    const sorted = title.sort();
    console.log(sorted);
}

// book
const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  ];

// calling

const titles = getTittles(books);
sortTittles(titles);