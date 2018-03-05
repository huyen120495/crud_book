module.exports = function(request, response,next) {
    let repository = request.app.get('book_repository');

    repository.save(request.body.book).then(() => {
        response.status(201).send({message : 'created'});
    });
}
