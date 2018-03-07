const Book       = require('./book');
const Publisher  = require('../publisher/publisher');
const Connection = require('../../database/connection');

class BookFactoryFromRQ{

    /**
     * 
     * @param {Connection} connection 
     */
    constructor(publisher_factory_from_db) {
        this.publisher_factory_from_db = publisher_factory_from_db;
    }

    /**
     *
     * @param {Object} bookRaw
     * @return {Book}
     */
    make(bookRaw) {
        let book = new Book(bookRaw.title, bookRaw.author);
        book.setId(bookRaw.id);
        book.setPrice(bookRaw.price);
        return this.publisher_factory_from_db.make(bookRaw.publisher_id)
        .then(publisher => {
            book.setPublisher(publisher);
            return book;
        });

        // return this.connection('publishers').select().where({id : bookRaw.publisher_id}).limit(1)
        // .then(publishers => {
        //     if (publishers[0]) {
        //         let publisher = new Publisher(publishers[0].name);
        //         publisher.setId(publishers[0].id);
        //         publisher.setAddress(publishers[0].address);
        //         publisher.setPhone(publishers[0].phonenumber);
        //         book.setPublisher(publisher);
        //     } 
        //     return book;
        // });

    }
}

module.exports = BookFactoryFromRQ;
