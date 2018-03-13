const express    = require('express');
const router     = express.Router();
const BookController = require('../controller/api/book-controller');
const Middleware = require('../middleware');

let bookController = new BookController();

let checkData = [
    Middleware.checkAuthorLength,
    Middleware.checkAuthorNull,
    Middleware.checkTitleLength,
    Middleware.checkTitleNull
];

router.get('/book/:id', Middleware.searchCondition, bookController.search);

router.get('/books', Middleware.searchCondition, bookController.search);

router.get('/search-advance', Middleware.searchCondition, bookController.search);

router.get('/search-basic', Middleware.searchCondition, bookController.search);

router.post('/book', checkData, bookController.create);

router.put('/book', checkData, bookController.edit);

router.delete('/book', bookController.delete);

module.exports = router;
