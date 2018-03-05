const Connection = require('../database/connection');
const Publisher = require('../app/publisher/publisher');

module.exports = (request, response, next) => {
    Connection('publishers').select().where({id : request.body.publisher_id}).limit(1)
    .then((publisherRaw) => {
        if (publisherRaw[0]) {
            let publisher = new Publisher(publisherRaw[0].name);
            publisher.setId(publisherRaw[0].id);
            publisher.setAddress(publisherRaw[0].address);
            publisher.setPhone(publisherRaw[0].phonenumber);

            request.body.publisher = publisher;
            next();
        } else {
            response.send({massage : 'fail'});
        }
    });
}
