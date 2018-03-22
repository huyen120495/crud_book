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

    /**
     * 
     * @param {int} id 
     * @return {Promise<Book>}
     */
    detail(id) {
        return this.connection
        .select('books.id', 'books.title', 'books.author', 'books.publisher_id', 'books.price', 'publishers.name', 'publishers.address', 'publishers.phonenumber')
        .from('books')
        .innerJoin('publishers', function () {
            this.on('publisher_id', '=', 'publishers.id')
        }).where({
            'books.id' : id,
            'books.deleted_at' : null
        })
    }
    
    /**
     * 
     * @return {Promise<Book[]>}
     */
    all() {
        return this.connection
        .select('books.id', 'books.title', 'books.author', 'books.publisher_id', 'books.price', 'publishers.name', 'publishers.address', 'publishers.phonenumber')
        .from('books')
        .innerJoin('publishers', function () {
            this.on('publisher_id', '=', 'publishers.id')
        }).where({
            'books.deleted_at' : null
        })
    }
}

module.exports = BookRepository;
