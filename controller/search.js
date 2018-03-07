module.exports = (request, response, next) => {
    request.app.get('book.searcher').search(request.condition)
        .then((results) => response.status(200).send(results.map(result => result.toJson())))
        .catch(next)
}
