const Connection = require('../../database/connection');

class BookRepository {
    
    /**
     * 
     * @param {Connection} connection 
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     * 
     * @param {Book} book
     * @returns {Promise<void>}
     */
    save(book) {
        return book.getId() ? 
            this.connection('books').update({
                title        : book.getTitle(),
                author       : book.getAuthor(),
                publisher_id : book.getPublisher() ? book.getPublisher().getId() : null,
                price        : book.getPrice()
            }).where({
                id : book.getId(),
                deleted_at : null
            }) :
            this.connection('books').insert({
                title        : book.getTitle(),
                author       : book.getAuthor(),
                publisher_id : book.getPublisher() ? book.getPublisher().getId() : null,
                price        : book.getPrice()
            });
    }

    /**
     * 
     * @param {int} id
     * @returns {Promise<void>}
     */
    delete(id) {
        return this.connection('books').update({
            deleted_at : new Date().getTime()
        }).where({
            id : id
        });
    }
    
}

module.exports = BookRepository;
