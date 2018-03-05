class Publisher {
    
    /**
     * 
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;
    }

    /**
     * 
     * @param {int} id 
     */
    setId(id) {
        this.id = id;
    }

    /**
     * 
     * @param {string} address 
     */
    setAddress(address) {
        this.address = address;
    }

    /**
     * 
     * @param {string} phone 
     */
    setPhone(phone) {
        this.phone = phone;
    }

    /**
     * 
     * @return {int|null}
     */
    getId() {
        return this.id;
    }

    /**
     * 
     * @return {string}
     */
    getName() {
        return this.name;
    }

    /**
     * 
     * @return {string}
     */
    getAddress() {
        return this.address;
    }

    /**
     * 
     * @return {string}
     */
    getPhone() {
        return this.phone;
    }
}

module.exports = Publisher;
