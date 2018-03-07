const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');
const BookRepository = require('./app/book/book-repository');
const Connection = require('./database/connection');
const BookFactory = require('./app/book/book-factory');
const Searcher = require('./app/search-services/searcher');

app.set('book_repository', new BookRepository(Connection));
app.set('book.searcher', new Searcher(Connection, new BookFactory()));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(router);

app.listen(3000, () => {
    console.log('server listen port 3000....');
})
