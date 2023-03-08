// array of books
const books = [
  { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
  { title: "Divergent", author: "Veronica Roth", year: 2011 },
  { title: "The Fault in Our Stars", author: "John Green", year: 2012 },
  { title: "Gone Girl", author: "Gillian Flynn", year: 2012 },
  { title: "Ready Player One", author: "Ernest Cline", year: 2011 },
  { title: "The Girl on the Train", author: "Paula Hawkins", year: 2015 },
  { title: "The Martian", author: "Andy Weir", year: 2011 },
  { title: "The Help", author: "Kathryn Stockett", year: 2009 }
]

const filterBooks = books
.filter(books => books.year >= 2010)
.map(books => ({
    title: books.title,
    author: books.author.toUpperCase(),
    year: books.year
}));

console.log(filterBooks);