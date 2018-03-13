const express    = require('express');
const router     = express.Router();
const BookController = require('../controller/book/book-controller');
const Middleware = require('../middleware');
const IdSearchCondition = require('../app/search-services/id-search-condition');

let bookController = new BookController();

router.get('/', Middleware.searchCondition, bookController.search);

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

// router.post('/book', Middleware.bookRequest, bookController.create);

// router.put('/book', Middleware.bookRequestEdit, bookController.edit);

router.delete('/book/:id', bookController.delete);

router.get('/search-advance', Middleware.searchCondition, bookController.search);

router.get('/search-basic', Middleware.searchCondition, bookController.search);

module.exports = router;
