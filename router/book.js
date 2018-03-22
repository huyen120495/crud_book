const express        = require('express');
const router         = express.Router();
const BookController = require('../controller/book/book-controller');
const Middleware     = require('../middleware');

let bookController = new BookController();
let checkData = [
    Middleware.checkAuthorLength,
    Middleware.checkAuthorNull,
    Middleware.checkTitleLength,
    Middleware.checkTitleNull
];

router.get('/', bookController.all);

router.get('/search', bookController.makeFormSearch);

router.get('/book', bookController.makeFormCreate);

router.get('/edit/:id', bookController.makeFormEdit);

router.get('/book/delete/:id',bookController.delete);

router.get('/book/:id', bookController.detail);

router.post('/book', checkData, bookController.save);

router.get('/search-advance', Middleware.searchCondition, bookController.search);

router.get('/search-basic', Middleware.searchCondition, bookController.search);

module.exports = router;
