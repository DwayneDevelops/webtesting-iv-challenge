
exports.up = function(knex, Promise) {
  return knex.schema.createTable('whatever', tbl => {
      tbl
      .increments();

      tbl
      .string('random', 255)
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('whatever');
};
