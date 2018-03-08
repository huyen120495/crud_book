class IdSearchCondition {

    /**
     * 
     * @param {int} bookId 
     */
    constructor(bookId) {
        this.bookId = bookId;
    }

    /**
     *
     * @param sqlQuery
     * @return {Promise<Book[]>}
     */
    describe(sqlQuery) {
        return sqlQuery.where({'books.deleted_at': null, 'books.id': this.bookId})
    }
    
}

module.exports = IdSearchCondition;
