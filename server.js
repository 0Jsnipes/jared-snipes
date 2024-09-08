const express = require('express');
const app = express();
const recipesRouter = require('./routes/recipes');

app.use(express.json());
app.use('/api', recipesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
