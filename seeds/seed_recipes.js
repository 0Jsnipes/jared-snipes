/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('recipes').del()
    .then(() => {
      return knex('recipes').insert([
        { recipe_name: 'Spaghetti Bolognese' },
        { recipe_name: 'Chicken Curry' }
      ]);
    });
};
