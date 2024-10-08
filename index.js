function fetchBooks() {
  // Return the fetch call so it is accessible to the tests
  return fetch("https://anapioficeandfire.com/api/books")
    .then(function(response) {
      return response.json(); // Convert the response to JSON
    })
    .then(function(data) {
      renderBooks(data); // Call renderBooks with the JSON data
    })
    .catch(function(error) {
      console.error("Error fetching books:", error); // Handle any errors
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  
  // Loop through the array of books and create an h2 element for each
  books.forEach(function(book) {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name; // Set the content to the book's name
    main.appendChild(h2); // Append the h2 element to the main element
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); // Fetch the books when the DOM content is loaded
});
