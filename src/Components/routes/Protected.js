import { Redirect, Route } from 'react-router-dom';

export const Protected = ({ component: Component, ...rest }) => {
  const userLogged = true;
  if (!userLogged) {
    return <Redirect to="/login" />;
  }
  return <Route {...rest} component={Component} />;
};
