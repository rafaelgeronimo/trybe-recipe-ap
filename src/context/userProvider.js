import React, { useState } from 'react';

import Context from './context';

function UserProvider({ children }) {
  const [email, setEmail] = useState('');

  return (
    <Context.UserProvider value={ { email, setEmail } }>
      { children }
    </Context.UserProvider>
  );
}

export default UserProvider;
