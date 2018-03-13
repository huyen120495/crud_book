class BookController {

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    create(request, response, next) {
        request.app.get('book_factory_from_rq').make(request.body).then(book => {
            request.app.get('book_repository').save(book).then(() => {
                response.status(201).send({message : 'created'});
            });
        })
    }

    /**
     *
     * @param request
     * @param response
     */
    delete(request, response) {
        request.app.get('book_repository').delete(request.body.id).then(() => {
            response.send({message : 'deleted'});
        });
    }

    /**
     *
     * @param request
     * @param response
     */
    edit(request, response, next) {
        request.app.get('book_factory_from_rq').make(request.body).then(book => {
            request.app.get('book_repository').save(book).then(() => {
                response.status(201).send({message : 'modify'});
            });
        });
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    search(request, response, next) {
        request.app.get('book_searcher').search(request.condition)
        .then((books) => response.status(200).send(books.map(book => book.toJson())))
        .catch(next);
    }
    
}

module.exports = BookController;
