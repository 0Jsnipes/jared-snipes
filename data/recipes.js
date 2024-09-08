const knex = require('../knex');

const getRecipeById = async (recipe_id) => {
  const recipe = await knex('recipes')
    .where({ recipe_id })
    .first();

  if (!recipe) return null;

  const steps = await knex('steps')
    .where({ recipe_id })
    .orderBy('step_number');

  const step_ids = steps.map(step => step.step_id);
  const ingredients = await knex('step_ingredients')
    .join('ingredients', 'step_ingredients.ingredient_id', 'ingredients.ingredient_id')
    .whereIn('step_id', step_ids)
    .select('step_id', 'ingredient_id', 'ingredient_name', 'quantity');

  const recipeWithSteps = {
    recipe_id: recipe.recipe_id,
    recipe_name: recipe.recipe_name,
    created_at: recipe.created_at,
    steps: steps.map(step => {
      return {
        step_id: step.step_id,
        step_number: step.step_number,
        step_instructions: step.step_instructions,
        ingredients: ingredients.filter(ingredient => ingredient.step_id === step.step_id)
          .map(ingredient => ({
            ingredient_id: ingredient.ingredient_id,
            ingredient_name: ingredient.ingredient_name,
            quantity: ingredient.quantity
          }))
      };
    })
  };

  return recipeWithSteps;
};

module.exports = {
  getRecipeById
};
