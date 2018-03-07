const Publisher = require('../publisher/publisher');

class PublisherProvider {

    constructor(connection) {
        this.connection = connection;
    }

    /**
     * 
     * @param {int} publisher_id 
     * @return {Promise<Publisher|null>}
     */
    make(publisher_id) {
        return this.connection('publishers').where({id : publisher_id}).limit(1)
        .then(publishers => {
            if (publishers[0]) {
                let publisher = new Publisher(publishers[0].name);
                publisher.setId(publishers[0].id);
                publisher.setAddress(publishers[0].address);
                publisher.setPhone(publishers[0].phonenumber);
                return publisher;
            } 
            return null;
        });
    }

}
module.exports = PublisherProvider;
