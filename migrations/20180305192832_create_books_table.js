
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', function (table) {
        table.increments('id');
        table.text('title');
        table.text('author');
        table.text('publisher');
        table.float('price');
        table.bigInteger('deleted_at');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('books');
};
