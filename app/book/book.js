class Book {
    
    /**
     * @param {string} title 
     * @param {string} author 
     */
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    /**
     * @returns {string}
     */
    getTitle() {
        return this.title;
    }

    /**
     * @returns {string}
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
     * @returns {string}
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
     * @returns {float}
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
     * @returns {int|null}
     */
    getId() {
        return this.id;
    }

    toJson() {
        return {
            id : this.getId(),
            title : this.getTitle(),
            author : this.getAuthor(),
            publisher : this.getPublisher().getName(),
            price : this.getPrice()
        }
    }
}

module.exports = Book;
