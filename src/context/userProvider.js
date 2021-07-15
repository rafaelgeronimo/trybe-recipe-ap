import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';

function UserProvider({ children }) {
  const [email, setEmail] = useState('');

  return (
    <Context.Provider value={ { email, setEmail } }>
      { children }
    </Context.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserProvider;
