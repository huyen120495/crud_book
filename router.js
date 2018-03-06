const express = require('express');
const router = express.Router();
const Controller = require('./controller');
const Middleware = require('./middleware');

router.get('/', (request, response) => {
    response.send('hello');
});

router.get('/book/:id', Controller.search, Middleware.bookFactoryFromDatabase);

router.get('/books', Controller.listAll, Middleware.bookFactoryFromDatabase);

router.post('/book', Middleware.publisherFactory, Middleware.bookFactory, Controller.create);

router.put('/book', Middleware.publisherFactory, Middleware.bookFactory, Controller.edit);

router.delete('/book', Controller.delete);

module.exports = router;
