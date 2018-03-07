
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title : 'tieu de 1', author : 'tac gia 1', publisher_id : 1, price : 1204},
        {title : 'tieu de 2', author : 'tac gia 2', publisher_id : 2, price : 104},
        {title : 'tieu de 3', author : 'tac gia 3', publisher_id : 3, price : 124},
        {title : 'tieu de 4', author : 'tac gia 4', publisher_id : 4, price : 204},
        {title : 'tieu de 5', author : 'tac gia 5', publisher_id : 5, price : 120}
      ]);
    });
};
