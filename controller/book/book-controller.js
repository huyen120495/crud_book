class BookController {

    /**
     *
     * @param request
     * @param response
     */
    save(request, response) {
        request.app.get('book_factory_from_rq').make(request.body).then(book => {
            request.app.get('book_repository').save(book)
            .then(() => response.redirect('/'));
        });
    }

    /**
     *
     * @param request
     * @param response
     */
    delete(request, response) {
        request.app.get('book_repository').delete(request.params.id)
            .then(() => response.redirect('/'));
    }

    /**
     *
     * @param request
     * @param response
     */
    search(request, response) {
        request.app.get('book_searcher').search(request.condition)
            .then(books => response.json(books));
    }

    /**
     *
     * @param request
     * @param response
     */
    detail(request, response) {
        request.app.get('book_repository').detail(request.params.id)
            .then(bookRaw => bookRaw.map(book => request.app.get('book_factory_from_db').make(book)))
            .then(books => response.render('detail.html', {book : books[0]}));
    }

    /**
     *
     * @param request
     * @param response
     */
    all(request, response) {
        request.app.get('book_repository').all()
            .then(bookRaw => bookRaw.map(book => request.app.get('book_factory_from_db').make(book)))
            .then(books => response.render('listbook.html', {books : books}));
    }

    /**
     *
     * @param request
     * @param response
     */
    makeFormEdit(request, response) {
        let bookDetail = request.app.set('book_repository').detail(request.params.id);
        let publishers = request.app.get('publisher_provider').all();
        Promise.all([bookDetail, publishers]).then(bookEdit => {
            response.render('edit.html', {
                bookDetail : bookEdit[0][0],
                publishers : bookEdit[1]
            });
        });
    }

    /**
     *
     * @param request
     * @param response
     */
    makeFormCreate(request, response) {
        request.app.get('publisher_provider').all().then(publishers => {
            response.render('create.html', {publishers: publishers});
        });
    }

    /**
     *
     * @param request
     * @param response
     */
    makeFormSearch(request, response) {response.render('search.html');}

}

module.exports = BookController;
