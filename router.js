const express    = require('express');
const router     = express.Router();
const Controller = require('./controller');
const Middleware = require('./middleware');

let check = [
    Middleware.checkAuthorLength,
    Middleware.checkAuthorNull,
    Middleware.checkTitleLength,
    Middleware.checkTitleNull
];

router.get('/book/:id',Middleware.searchCondition, Controller.search);

router.get('/books', Middleware.searchCondition, Controller.search);

router.get('/search-advance', Middleware.searchCondition, Controller.search);

router.get('/search-basic', Middleware.searchCondition, Controller.search);

router.post('/book', check, Controller.create);

router.put('/book', check, Controller.edit);

router.delete('/book', Controller.delete);

module.exports = router;
