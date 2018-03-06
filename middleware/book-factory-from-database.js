const Book = require('../app/book/book');
const Publisher = require('../app/publisher/publisher')

module.exports = (request, response, next) => {
    let books = [];
    request.body.bookRow.map(bookraw => {
        let publisher = new Publisher(bookraw.name);
        publisher.setId(bookraw.publisher_id);
        publisher.setAddress(bookraw.address);
        publisher.setPhone(bookraw.phonenumber);

        let book = new Book(bookraw.title, bookraw.author);
        book.setId(bookraw.id);
        book.setPublisher(publisher);
        book.setPrice(bookraw.price);

        books.push(book.toJson());
    });
    response.send(books);
}
