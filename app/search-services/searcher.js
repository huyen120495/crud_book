class Searcher {

    /**
     *
     * @param {Connection} connection
     * @param {BookFactoryFromDB} factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory    = factory;
    }

    /**
     *
     * @param condition
     * @return {Book[]}
     */
    search(condition) {
        let sqlQuery = this.connection
            .select('books.id', 'books.title', 'books.author', 'books.publisher_id', 'books.price', 'publishers.name', 'publishers.address', 'publishers.phonenumber')
            .from('books')
            .innerJoin('publishers', function () {
                this.on('publisher_id', '=', 'publishers.id')
            });
        condition.describe(sqlQuery);
        return sqlQuery.then(results => results.map(element => this.factory.make(element)));
    }
}

module.exports = Searcher;
