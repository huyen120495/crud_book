
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publishers').del()
    .then(function () {
      // Inserts seed entries
      return knex('publishers').insert([
        {name : 'ten nxb 1', address : 'dia chi 1', phonenumber : '0123456789'},
        {name : 'ten nxb 2', address : 'dia chi 2', phonenumber : '0123456789'},
        {name : 'ten nxb 3', address : 'dia chi 3', phonenumber : '0123456789'},
        {name : 'ten nxb 4', address : 'dia chi 4', phonenumber : '0123456789'},
        {name : 'ten nxb 5', address : 'dia chi 5', phonenumber : '0123456789'},
      ]);
    });
};
