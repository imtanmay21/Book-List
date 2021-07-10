// Book Class
class Book {

    // Constructor
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

// UI Class
class UI {

    // Methods

    // Removing a book
    removeBook(btn) {

        if (btn.classList.contains('fa-times-circle')) {
            btn.parentElement.parentElement.parentElement.remove();
        }
        

    }

    // Showing an error
    showError() {
        overlay.classList.remove('not-active');
    }

    // Adding book to list
    addBookToList(book) {

        const container = document.getElementById('book-container');

        // Create a row
        const row = document.createElement('div');
        row.className = 'row';

        // Adding inner html to row
        row.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.isbn}</p>
        <p><a href="#" class="btn-remove"><i class="fas fa-times-circle"></i></a></p>
        `;

        // Appending row to the container
        container.appendChild(row);

    }

    // Clearing fields
    clearFields() {
        document.getElementById('book-name').value = '';
        document.getElementById('author-name').value = '';
        document.getElementById('isbn').value = '';
    }

}

// UI variables
const addBtn = document.querySelector('#input-form .form-grp .btn');
const overlay = document.querySelector('.overlay');
const closeErrorBtn = document.querySelector('.error-box i:first-child');

// Event Listeners

// Adding book event
addBtn.addEventListener('click', function (e) {

    const title = document.getElementById('book-name').value;
    const author = document.getElementById('author-name').value;
    const isbn = document.getElementById('isbn').value;

    // Creating book object
    const book = new Book(title, author, isbn);

    // Creating ui object
    const ui = new UI();


    // Validating
    if (title == '' || author == '' || isbn == '') {
        ui.showError();
    } else {

        // Add book to list
        ui.addBookToList(book);

        // Clear fields
        ui.clearFields();

    }

})

// Closing error box event
closeErrorBtn.addEventListener('click', function(e) {
    overlay.classList.add('not-active');
})

// Removing book event
document.getElementById('book-container').addEventListener('click', function(e) {
    
    const ui = new UI();

    ui.removeBook(e.target);

})