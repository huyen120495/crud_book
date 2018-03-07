class Book {
    
    /**
     * @param {string} title 
     * @param {string} author 
     */
    constructor(title, author) {
        this.title  = title;
        this.author = author;
    }

    /**
     * @return {string}
     */
    getTitle() {
        return this.title;
    }

    /**
     * @return {string}
     */
    getAuthor() {
        return this.author;
    }

    /**
     * @param {Publisher} publisher 
     */
    setPublisher(publisher) {
        this.publisher = publisher;
    }

    /**
     * @return {string}
     */
    getPublisher() {
        return this.publisher;
    }

    /**
     * @param {float} price 
     */
    setPrice(price) {
        this.price = price;
    }

    /**
     * @return {float}
     */
    getPrice() {
        return this.price;
    }

    /**
     * @param {int} id 
     */
    setId(id) {
        this.id = id;
    }

    /**
     * @return {int|null}
     */
    getId() {
        return this.id;
    }

    /**
     * 
     * @return {json}
     */
    toJson() {
        return {
            id        : this.getId(),
            title     : this.getTitle(),
            author    : this.getAuthor(),
            publisher : this.getPublisher().getName(),
            price     : this.getPrice()
        }
    }
    
}

module.exports = Book;
