/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(() => {
      return knex('ingredients').insert([
        { ingredient_name: 'olive oil' },
        { ingredient_name: 'chicken' }
      ]);
    });
};
