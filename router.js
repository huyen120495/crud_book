const express = require('express');
const router = express.Router();
const Controller = require('./controller');
const Middleware = require('./middleware');

router.get('/', (request, response) => {
    response.send('hello');
});

router.get('/book/:id',Middleware.searchCondition, Controller.search);

router.get('/books', Middleware.searchCondition, Controller.search);

router.get('/search-advance', Middleware.searchCondition, Controller.search);

router.get('/search-basic', Middleware.searchCondition, Controller.search);

router.post('/book', Middleware.publisherFactory, Middleware.bookFactory, Controller.create);

router.put('/book', Middleware.publisherFactory, Middleware.bookFactory, Controller.edit);

router.delete('/book', Controller.delete);

module.exports = router;
