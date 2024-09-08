/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('step_ingredients', table => {
      table.integer('step_id').unsigned().references('step_id').inTable('steps').onDelete('CASCADE');
      table.integer('ingredient_id').unsigned().references('ingredient_id').inTable('ingredients').onDelete('CASCADE');
      table.decimal('quantity').notNullable();
      table.primary(['step_id', 'ingredient_id']);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('step_ingredients');
  };
  