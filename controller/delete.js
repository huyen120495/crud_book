module.exports = function(request, response) {
    request.app.get('book_repository').delete(request.body.id).then(() => {
        response.send({message : 'deleted'});
    });
}
