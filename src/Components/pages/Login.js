import React from 'react';

export const Login = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h2 className="center">Iniciar sesión</h2>
        <form action="">
          <div className="form__item">
            <label htmlFor="email">
              Correo electrónico
              <input
                type="email"
                id="email"
                placeholder="ingrese su email"
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
