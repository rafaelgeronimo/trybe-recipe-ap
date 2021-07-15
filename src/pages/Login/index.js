import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../../context/Context';

function Login() {
  const { email, setEmail } = useContext(Context);
  const [password, setPassword] = useState('');
  const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const minPassLength = 7;
  const loginData = ({ email });
  const history = useHistory();
  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(loginData));
    history.push('/comidas');
  }
  return (
    <>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          value={ email }
          placeholder="E-mail"
          patter={ patternEmail }
          onChange={ (ev) => setEmail(ev.target.value) }
        />
        <input
          type="password"
          value={ password }
          placeholder="Senha"
          onChange={ (ev) => setPassword(ev.target.value) }
        />
        <button
          type="button"
          onClick={ handleClick }
          disabled={ !((patternEmail.test(email)) && (password.length >= minPassLength))}
        >
          Entrar
        </button>
      </form>
    </>
  );
}

export default Login;
