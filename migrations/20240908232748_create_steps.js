/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('steps', table => {
      table.increments('step_id').primary();
      table.integer('recipe_id').unsigned().references('recipe_id').inTable('recipes').onDelete('CASCADE');
      table.integer('step_number').notNullable();
      table.string('step_instructions').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('steps');
  };
  