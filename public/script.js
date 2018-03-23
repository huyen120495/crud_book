$(document).ready(function() {
    $('#keyword').change(searchbasic);
    $('#search-basic').click(searchbasic);
    $('#search-advance').click(searchadvance);
}); 

function searchbasic(){
    var keyword = $('#keyword').val();
    return $.get("/search-basic?keyword=" + keyword)
    .then(books => {
        var template = $('#bookTemplate').html();
        var resultsHTML = books.map(function (book) {
            return template.replace(':title:', book.title).replace(':author:', book.author).replace(':id:', book.id)
        }).join('');
        $('#viewBooks').html(resultsHTML);
    })
}

function searchadvance() {
    return $.get('/search-advance', {
        title : $('#title').val(),
        author : $('#author').val(),
        publisher : $('#publisher').val()
    }).then(books => {
        var template = $('#bookTemplate').html();
        var resultsHTML = books.map(function (book) {
            return template.replace(':title:', book.title).replace(':author:', book.author).replace(':id:', book.id)
        }).join('');
        $('#viewBooks').html(resultsHTML);
    })
}