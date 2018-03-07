const Book       = require('./book');
const Connection = require('../../database/connection');

class BookFactoryFromRQ{

    /**
     * 
     * @param {Connection} connection 
     */
    constructor(publisher_provider) {
        this.publisher_provider = publisher_provider;
    }

    /**
     *
     * @param {Object} bookRaw
     * @return {Promise<Book>}
     */
    make(bookRaw) {
        let book = new Book(bookRaw.title, bookRaw.author);
        book.setId(bookRaw.id);
        book.setPrice(bookRaw.price);
        return this.publisher_provider.make(bookRaw.publisher_id)
        .then(publisher => {
            book.setPublisher(publisher);
            return book;
        });
    }
    
}

module.exports = BookFactoryFromRQ;
