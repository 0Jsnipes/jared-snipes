/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ingredients', table => {
      table.increments('ingredient_id').primary();
      table.string('ingredient_name').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('ingredients');
  };
  