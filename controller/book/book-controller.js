class BookController {

    /**
     *
     * @param request
     * @param response
     */
    save(request, response) {
        request.app.get('book_factory_from_rq').make(request.body).then(book => {
            request.app.get('book_repository').save(book).then(() => {
                response.redirect('/');
            });
        });
    }

    /**
     *
     * @param request
     * @param response
     */
    delete(request, response) {
        request.app.get('book_repository').delete(request.params.id).then(function () {
            response.redirect('/');
        });
    }

    /**
     *
     * @param request
     * @param response
     */
    search(request, response) {
        request.app.get('book_searcher').search(request.condition)
            .then(books => response.send(books))
    }

    /**
     *
     * @param request
     * @param response
     */
    detail(request, response) {
        request.app.get('book_repository').detail(request.params.id)
            .then(books => books.map(book => request.app.get('book_factory_from_db').make(book)))
            .then(books => response.render('detail.html',{book:books[0]}))
            
    }

    /**
     *
     * @param request
     * @param response
     */
    all(request, response) {
        request.app.get('book_repository').all()
            .then(books => books.map(book => request.app.get('book_factory_from_db').make(book)))
            .then(books => response.render('listbook.html', {books : books}))
    }

}

module.exports = BookController;
