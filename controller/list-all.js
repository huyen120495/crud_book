module.exports = function(request, response, next) {
    let repository = request.app.get('book_repository');

    repository.all().then((bookRow) => {
        // response.send(results);
        request.body.bookRow = bookRow;
        // console.log(request.body.bookRow);
        next();
    });
}
