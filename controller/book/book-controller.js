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
    edit(request, response, next) {
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
     * @param next
     */
    search(request, response, next) {
        request.app.get('book_searcher').search(request.condition)
            .then(books => response.render('listbook.html',{books:books}))
            .catch(next)
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    detail(request, response, next) {
        request.app.get('book_searcher').search(request.condition)
            .then(books => {
                if (!books.length) {
                    throw new Error('no book');
                }
                response.render('detail.html', {book: books[0]})
            })
            .catch(next)
    }

}

module.exports = BookController;
