const BookRepository = require('./app/book/book-repository');
const Book = require('./app/book/book'); 
const Connection = require('./database/connection');
const Publisher = require('./app/publisher/publisher');
const Search = require('./app/search-services/searcher');

let search = new Search(Connection);

search.searchAdvance('d', 'a').then(results => {
    console.log(results);
});

// let bookrepo = new BookRepository(Connection);

// let publisher = new Publisher('ten nxb');
// publisher.setId(1);
// publisher.setAddress('dia chi');
// publisher.setPhone('01948');

// let book = new Book('tieu de', 'tac gia');
// book.setPublisher(publisher);
// book.setPrice(12495);
// book.setId(2);

// console.log(publisher);
// console.log(book);

// bookrepo.search(2).then(() => {
//     console.log('ok');
// }, () => {
//     console.log('fail');
// });

// bookrepo.save(book).then(() => {
//     console.log('ok');
// }, () => {
//     console.log('fail');
// });

// bookrepo.delete(1).then(() => {
//     console.log('ok');
// }, () => {
//     console.log('fail');
// });

// bookrepo.save(book).then(() => {
//     console.log('ok');
// }, () => {
//     console.log('fail');
// })
