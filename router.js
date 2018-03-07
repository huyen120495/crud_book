const express    = require('express');
const router     = express.Router();
const Controller = require('./controller');
const Middleware = require('./middleware');

let checkData = [
    Middleware.checkAuthorLength,
    Middleware.checkAuthorNull,
    Middleware.checkTitleLength,
    Middleware.checkTitleNull
];

router.get('/book/:id', Middleware.searchCondition, Controller.search);

router.get('/books', Middleware.searchCondition, Controller.search);

router.get('/search-advance', Middleware.searchCondition, Controller.search);

router.get('/search-basic', Middleware.searchCondition, Controller.search);

router.post('/book', checkData, Controller.create);

router.put('/book', checkData, Controller.edit);

router.delete('/book', Controller.delete);

module.exports = router;
