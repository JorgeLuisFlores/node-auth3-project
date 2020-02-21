exports.seed = function (knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([{
          username: 'test1',
          password: "test1",
          department: "Operations"
        },
        {
          username: 'test2',
          password: "test2",
          department: "Operations"
        },
        {
          username: 'test3',
          password: "test3",
          department: "IT"
        }
      ]);
    });
};