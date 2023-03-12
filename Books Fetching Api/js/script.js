
const form = document.querySelector('form');
const searchInput = document.querySelector('#searchInput');
const bookContainer = document.querySelector('.book-container');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value;
  fetchBooks(searchTerm);
});

async function fetchBooks(searchTerm) {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40`);
    const data = await response.json();
    const books = data.items;
    displayBooks(books);
  } catch (error) {
    console.log(error);
  }
}

function displayBooks(books) {
  const bookCards = books.map((book) => {
    const title = book.volumeInfo.title || 'No title available';
    const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No author available';
    const description = book.volumeInfo.description || 'No description available';
    const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x196.png?text=No+Cover';
    const infoLink = book.volumeInfo.infoLink;
    console.log(description)
    return `
      <div class="book-card">
        <img src="${thumbnail}" alt="Book cover for ${title}" >
        <div>
          <h2>${title}</h2>
          <p><strong>Author:</strong> ${author}</p>
          <p>${description}</p>
          <a href="${infoLink}" target="_blank">More info</a>
        </div>
      </div>
    `;
  }).join('');

  bookContainer.innerHTML = bookCards;
}
