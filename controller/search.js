module.exports = (request, response, next) => {
    request.app.get('book_searcher').search(request.condition)
        .then((books) => response.status(200).send(books.map(book => book.toJson())))
        .catch(next);
};
