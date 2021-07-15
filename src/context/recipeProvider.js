import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';

function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  const contextValue = {
    recipes,
    setRecipes,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeProvider;
