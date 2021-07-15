import React from 'react';

import Login from './pages/Login';
import UserProvider from './context/UserProvider';
import RecipeProvider from './context/RecipeProvider';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <RecipeProvider>
      <UserProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </UserProvider>
    </RecipeProvider>
  );
}

export default App;
