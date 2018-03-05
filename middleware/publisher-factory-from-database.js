const Connection = require('../database/connection');
const Publisher = require('../app/publisher/publisher');

module.exports = (request, response, next) => {
    for(let i = 0; i < request.body.bookRow.length; i++) {
        Connection('publishers').select()
        .where({id : request.body.bookRow[i].publisher_id}).limit(1)
        .then((publisherRaw) => {
            let publisher = new Publisher(publisherRaw[0].name);
            publisher.setId(publisherRaw[0].id);
            publisher.setAddress(publisherRaw[0].address);
            publisher.setPhone(publisherRaw[0].phonenumber);

            request.body.bookRow[i].publisher = publisher;
            // console.log(request.body.bookRow[i]);
        });
    }
    console.log(request.body.bookRow);
    
    // request.body.bookRow.map(book => {
    //     Connection('publishers').select().where({id : book.publisher_id}).limit(1)
    //     .then(publisherRaw => {
    //         let publisher = new Publisher(publisherRaw[0].name);
    //         publisher.setId(publisherRaw[0].id);
    //         publisher.setAddress(publisherRaw[0].address);
    //         publisher.setPhone(publisherRaw[0].phonenumber);

    //         return publisher;
    //     });
    // });
    next();
}
