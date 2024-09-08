/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('steps').del()
    .then(() => {
      return knex('steps').insert([
        { recipe_id: 1, step_number: 1, step_instructions: 'Put a large saucepan on a medium heat' },
        { recipe_id: 1, step_number: 2, step_instructions: 'Add 1 tbsp olive oil' },
        { recipe_id: 2, step_number: 1, step_instructions: 'Heat oil in a pan' }
      ]);
    });
};
