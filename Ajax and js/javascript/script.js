const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=40';

async function getBooksData() {
	try {
		const response = await fetch(API_URL);
		const data = await response.json();
		return data.items;
	} catch (error) {
		console.error(error);
	}
}

function createCard(title, author, imageSrc, description) {
	const card = document.createElement('div');
	card.classList.add('card');

	const cardTitle = document.createElement('h2');
	cardTitle.textContent = title;

	const cardAuthor = document.createElement('p');
	cardAuthor.textContent = `Author: ${author}`;

	const cardImage = document.createElement('img');
	cardImage.src = imageSrc;

	const cardDescription = document.createElement('p');
	cardDescription.textContent = description;

	card.appendChild(cardTitle);
	card.appendChild(cardAuthor);
	card.appendChild(cardImage);
	card.appendChild(cardDescription);

	return card;
}

async function loadCards() {
	const cardsContainer = document.querySelector('.cards-container');
	const booksData = await getBooksData();

	booksData.forEach(bookData => {
		const title = bookData.volumeInfo.title;
		const author = bookData.volumeInfo.authors.join(', ');
		const imageSrc = bookData.volumeInfo.imageLinks.thumbnail;
		const description = bookData.volumeInfo.description;

		const card = createCard(title, author, imageSrc, description);
		cardsContainer.appendChild(card);
	});
}

loadCards();
