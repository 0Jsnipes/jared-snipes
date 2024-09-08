const express = require('express');
const router = express.Router();
const { getRecipeById } = require('../data/recipes');

router.get('/recipes/:id', async (req, res) => {
  try {
    const recipe = await getRecipeById(parseInt(req.params.id));
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving recipe' });
  }
});

module.exports = router;
