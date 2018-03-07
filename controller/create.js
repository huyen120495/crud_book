module.exports = function(request, response) {
    request.app.get('book_factory_from_db').make(request.body).then(book => {
        request.app.get('book_repository').save(book).then(() => {
            response.status(201).send({message : 'created'});
        });
    })
}
