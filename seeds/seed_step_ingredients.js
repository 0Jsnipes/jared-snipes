/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('step_ingredients').del()
    .then(() => {
      return knex('step_ingredients').insert([
        { step_id: 2, ingredient_id: 1, quantity: 0.014 }
      ]);
    });
};
