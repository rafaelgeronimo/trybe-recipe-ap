import React, { useState } from 'react';

import Context from './context';

function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  const contextValue = {
    recipes,
    setRecipes,
  };

  return (
    <Context.RecipeProvider value={ contextValue }>
      { children }
    </Context.RecipeProvider>
  );
}

export default RecipeProvider;
