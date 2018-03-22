const express           = require('express');
const app               = express();
const bodyParser        = require('body-parser');
const index             = require('./router/book');
const BookRepository    = require('./app/book/book-repository');
const Connection        = require('./database/connection');
const BookFactoryFromDB = require('./app/book/book-factory-from-db');
const BookFactoryFromRQ = require('./app/book/book-factory-from-rq');
const PublisherProvider = require('./app/publisher/publisher-provider');
const Searcher          = require('./app/search-services/searcher');
const nunjucks          = require('nunjucks');

let publisherProvider    = new PublisherProvider(Connection);
let bookFactoryFromDB = new BookFactoryFromDB();

app.set('views','./views');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('book_factory_from_db', bookFactoryFromDB);
app.set('book_repository', new BookRepository(Connection));
app.set('book_searcher', new Searcher(Connection, bookFactoryFromDB));
app.set('book_factory_from_rq', new BookFactoryFromRQ(publisherProvider));
app.set('publisher_provider', publisherProvider);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(index);

app.listen(3000, () => {
    console.log('server listen port 3000....');
});
