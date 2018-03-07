class AdvancedSearchCondition {

    /**
     *
     * @param {string} title
     * @param {string} author
     * @param {string} publisher
     */
    constructor (title, author, publisher){
        this.title          = title;
        this.author         = author;
        this.publisher_name = publisher;
    }

    /**
     *
     * @param sqlQuery
     * @return {Book[]}
     */
    describe(sqlQuery) {
        return sqlQuery.where('books.author', 'like', '%' + this.author + '%')
            .where('books.title', 'like', '%' + this.title + '%')
            .where('publishers.name', 'like', '%' + this.publisher_name + '%')
            .where('books.deleted_at', null)
    }
}

module.exports = AdvancedSearchCondition;
