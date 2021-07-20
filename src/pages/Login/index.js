import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import UserContext from '../../context/UserContext';

import './styles.css';

function Login() {
  const { email, setEmail } = useContext(UserContext);
  const [password, setPassword] = useState('');
  const minPassLength = 7;
  const loginData = ({ email });
  const history = useHistory();
  function handleClick() {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(loginData));
    history.push('/comidas');
  }
  const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    <div className="login-page">
      <div className="title">
        <h2>It's time to</h2>
        <h1>Eat and Drink</h1>
      </div>
      <form>
        <input
          type="email"
          value={ email }
          placeholder="E-mail"
          data-testid="email-input"
          pattern={ patternEmail }
          onChange={ (ev) => setEmail(ev.target.value) }
        />
        <input
          type="password"
          value={ password }
          placeholder="Senha"
          data-testid="password-input"
          onChange={ (ev) => setPassword(ev.target.value) }
        />
        <button
          variant="success"
          type="button"
          data-testid="login-submit-btn"
          onClick={ handleClick }
          disabled={ !((patternEmail.test(email)) && (password.length >= minPassLength)) }
        >
          Entrar
        </button>
      </form>
      <div className="background-image" />
    </div>
  );
}

export default Login;
