const Book = require('../app/book/book');

module.exports = (request, response, next) => {
    request.body.bookRow.map(element => {
        let book = new Book(element.title, element.author);
        book.setId(element.id);
        book.setPublisher(element.publisher);
        book.setPrice(element.price);
        // element = book.toJson();
    });
    response.send(request.body.bookRow);
}
