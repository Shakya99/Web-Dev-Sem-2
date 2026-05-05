// Initial Data
let library = [
  { title: "Book1", isAvailable: true },
  { title: "Book2", isAvailable: false }
];

// a) Add Book
function addBook(title) {
  library.push({ title, isAvailable: true });
}

// b) Borrow Book
function borrowBook(title) {
  let book = library.find(b => b.title === title);

  if (!book) {
    console.log("Book not found");
  } else if (!book.isAvailable) {
    console.log("Book already borrowed");
  } else {
    book.isAvailable = false;
  }
}

// c) Return Book
function returnBook(title) {
  let book = library.find(b => b.title === title);

  if (!book) {
    console.log("Book not found");
  } else {
    book.isAvailable = true;
  }
}

// d) Get Available Books
function getAvailableBooks() {
  return library.filter(b => b.isAvailable);
}

// Example
addBook("Book3");
borrowBook("Book1");
returnBook("Book2");

console.log(getAvailableBooks());