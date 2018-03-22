const express    = require('express');
const router     = express.Router();
const BookController = require('../controller/book/book-controller');
const Middleware = require('../middleware');
const IdSearchCondition = require('../app/search-services/id-search-condition');
const UndeletedSearchCondition = require('../app/search-services/undeleted-search-condition');

let bookController = new BookController();
let checkData = [
    Middleware.checkAuthorLength,
    Middleware.checkAuthorNull,
    Middleware.checkTitleLength,
    Middleware.checkTitleNull
];

router.get('/', bookController.all);

router.get('/search', (req, res) => {
    res.render('search.html');
});

router.get('/book', (req, res) => {
    req.app.get('publisher_provider').all().then(publishers => {
        res.render('save.html', {publishers: publishers});
    })
});

router.get('/edit/:id', (req, res) => {
    req.condition = new IdSearchCondition(req.params.id);
    let detail = req.app.get('book_searcher').search(req.condition);
    let publishers = req.app.get('publisher_provider').all();
    Promise.all([detail, publishers]).then(bookEdit => {
        res.render('edit.html', {
            detail: bookEdit[0][0],
            publishers: bookEdit[1]
        });
    })
});

router.get('/book/delete/:id',bookController.delete);

router.get('/book/:id', bookController.detail);

router.post('/book', checkData, bookController.save);

router.delete('/book/:id', bookController.delete);

router.get('/search-advance', Middleware.searchCondition, bookController.search);

router.get('/search-basic', Middleware.searchCondition, bookController.search);

module.exports = router;
