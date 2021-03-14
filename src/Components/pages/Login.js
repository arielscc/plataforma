import axios from 'axios';
import React from 'react';

export const Login = () => {
  const authentication = e => {
    e.preventDefault();
    const form = e.target;

    const data = {
      email: form.email.value,
      password: form.password.value,
    };

    axios
      .post('https://api-edteam.alejogs4.now.sh/login', data)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h2 className="center">Iniciar sesión</h2>
        <form onSubmit={authentication}>
          <div className="form__item">
            <label htmlFor="email">
              Correo electrónico
              <input
                type="email"
                id="email"
                placeholder="ingrese su email"
                name="email"
                required
              />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Contraseña
              <input
                type="password"
                id="password"
                name="password"
                placeholder="ingrese su contraseña"
                required
              />
            </label>
          </div>
          <div className="form__item">
            <input
              type="submit"
              className="button full"
              value="Iniciar Sesión"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
