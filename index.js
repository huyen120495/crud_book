const express           = require('express');
const app               = express();
const bodyParser        = require('body-parser');
const router            = require('./router');
const BookRepository    = require('./app/book/book-repository');
const Connection        = require('./database/connection');
const BookFactoryFromDB = require('./app/book/book-factory-from-db');
const BookFactoryFromRQ = require('./app/book/book-factory-from-rq');
const PublisherProvider = require('./app/publisher/publisher-provider');
const Searcher          = require('./app/search-services/searcher');

app.set('book_repository', new BookRepository(Connection));
app.set('book_searcher', new Searcher(Connection, new BookFactoryFromDB()));
app.set('book_factory_from_rq', new BookFactoryFromRQ(new PublisherProvider(Connection)));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(router);

app.listen(3000, () => {
    console.log('server listen port 3000....');
});
