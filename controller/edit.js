module.exports = function(request, response) {
    request.app.get('book_factory_from_rq').make(request.body).then(book => {
        request.app.get('book_repository').save(book).then(() => {
            response.status(201).send({message : 'modify'});
        });
    });
}
