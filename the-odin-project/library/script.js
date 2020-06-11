
class Book {
  constructor(category, title, author, pages, read) {
    this.category = category || 'Misc';
    this.title = title || 'No title given';
    this.author = author || 'No author given';
    this.pages = pages > 0 ? pages : 0;
    this.read = read || false;
  }
}

function toggleRead(event) {
  const book = myLibrary[event.target.dataset.index];
  const button = event.target;
  book.read = !book.read;
  button.style.background = book.read ? 'rgb(20, 140, 219)' : 'gray';
  button.textContent = book.read ? 'Read' : 'Not Read';
}

function deleteBook(event) {
  const book = myLibrary[event.target.dataset.index];
  myLibrary.splice(myLibrary.indexOf(book), 1);
  // eslint-disable-next-line no-use-before-define
  render();
}

function renderBook(booksDiv, book) {
  const bookIndex = myLibrary.indexOf(book);

  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book');

  const titleDiv = document.createElement('div');
  titleDiv.textContent = book.title;

  const authorDiv = document.createElement('div');
  authorDiv.textContent = `by: ${book.author}`;

  const pagesDiv = document.createElement('div');
  pagesDiv.textContent = `${book.pages} pages`;

  const readButton = document.createElement('button');
  readButton.type = 'button';
  readButton.dataset.index = bookIndex;
  readButton.classList.add('book-btn');
  readButton.style.float = 'left';
  readButton.textContent = book.read ? 'Read' : 'Not Read';
  readButton.style.background = book.read ? 'rgb(20, 140, 219)' : 'gray';
  readButton.addEventListener('click', toggleRead);

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.classList.add('book-btn');
  deleteButton.style.float = 'right';
  deleteButton.dataset.index = bookIndex;
  deleteButton.textContent = 'Delete';
  deleteButton.style.background = 'rgb(248, 120, 120)';
  deleteButton.addEventListener('click', deleteBook);

  const buttonDiv = document.createElement('div');
  buttonDiv.style.width = '100%';
  buttonDiv.appendChild(readButton);
  buttonDiv.appendChild(deleteButton);

  [titleDiv, authorDiv, pagesDiv, buttonDiv].forEach((elem) => bookDiv.appendChild(elem));

  booksDiv.appendChild(bookDiv);
}

function deleteCategory(event) {
  const category = event.target.dataset.name;
  myLibrary.splice(0, myLibrary.length, ...myLibrary.filter((book) => book.category !== category));
  myCategories.delete(category);
  // eslint-disable-next-line no-use-before-define
  render();
}

function renderCategory(category) {
  const categoryDiv = document.createElement('div');
  categoryDiv.textContent = category;
  categoryDiv.classList.add('category');

  const deleteCategoryBtn = document.createElement('button');
  deleteCategoryBtn.classList.add('delete-category');
  deleteCategoryBtn.dataset.name = category;
  deleteCategoryBtn.textContent = 'Delete';
  deleteCategoryBtn.addEventListener('click', deleteCategory);

  categoryDiv.appendChild(deleteCategoryBtn);

  const booksDiv = document.createElement('div');
  booksDiv.classList.add('book-list');

  libraryDiv.appendChild(categoryDiv);
  libraryDiv.appendChild(booksDiv);

  myLibrary.filter((book) => book.category === category)
    .forEach((book) => renderBook(booksDiv, book));
}

function render() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  localStorage.setItem('myCategories', JSON.stringify([...myCategories]));
  libraryDiv.innerHTML = '';
  myCategories.forEach((category) => renderCategory(category));
}

function addBookToLibrary(event) {
  const form = event.target.parentElement.parentElement;
  const formData = new FormData(form);
  const newBook = new Book(formData.get('category'), formData.get('title'),
    formData.get('author'), formData.get('pages'), formData.get('read'));
  myLibrary.push(newBook);
  newBookForm.classList.remove('form-visible');
  form.reset();
  render();
}

function addCategory(event) {
  const form = event.target.parentElement.parentElement;
  const formData = new FormData(form);
  myCategories.add(formData.get('name') || 'Misc');
  newCategoryForm.classList.remove('form-visible');
  form.reset();
  render();
}

const myCategories = new Set(JSON.parse(localStorage.getItem('myCategories'))
 || ['fiction', 'non-fiction', 'Misc']);

const myLibrary = JSON.parse(localStorage.getItem('myLibrary'))
 || [new Book('fiction', 'Gardens of the Moon', 'Steve Erikson', '712', true),
   new Book('fiction', "The Hitchhiker's Guide to the Galaxy", 'Douglas Adams', '208', true)];

const newBookForm = document.getElementById('new-book-form');
const newCategoryForm = document.getElementById('new-category-form');
const libraryDiv = document.getElementById('library');

setTimeout(() => { document.body.classList.remove('no-transitions'); }, 1000); // Allow transition animations after 1 second

document.getElementById('new-book').addEventListener('click', () => { newBookForm.classList.add('form-visible'); });
document.getElementById('new-category').addEventListener('click', () => newCategoryForm.classList.add('form-visible'));

document.getElementById('cancel-book').addEventListener('click', () => newBookForm.classList.remove('form-visible'));
document.getElementById('create-book').addEventListener('click', addBookToLibrary);

document.getElementById('cancel-category').addEventListener('click', () => newCategoryForm.classList.remove('form-visible'));
document.getElementById('create-category').addEventListener('click', addCategory);


render();
