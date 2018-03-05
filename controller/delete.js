module.exports = function(request, response) {
    let repository = request.app.get('book_repository');

    repository.delete(request.body.id).then(() => {
        response.send({message : 'deleted'});
    });
}
