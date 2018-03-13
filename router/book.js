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

router.get('/', (request, response, next) => {
    request.condition = new UndeletedSearchCondition();
    next();
}, bookController.search);

router.get('/search', (req, res) => {
    res.render('search.html');
});

router.get('/book', (req, res) => {
    res.render('save.html');
});

router.get('/book/delete/:id',bookController.delete);

router.get('/book/:id', function (req, res, next) {
    req.condition = new IdSearchCondition(req.params.id);
    next();
}, bookController.detail);

router.post('/book', checkData, bookController.create);

router.put('/book', checkData, bookController.edit);

router.delete('/book/:id', bookController.delete);

router.get('/search-advance', Middleware.searchCondition, bookController.search);

router.get('/search-basic', Middleware.searchCondition, bookController.search);

module.exports = router;
