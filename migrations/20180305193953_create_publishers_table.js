
exports.up = function(knex, Promise) {
    return knex.schema.createTable('publishers', function (table) {
        table.increments('id');
        table.text('name');
        table.text('address');
        table.string('phonenumber');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('publishers');
};
