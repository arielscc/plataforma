import React from 'react';
import { Redirect, Route } from 'react-router';

export const Public = ({ component: Component, ...rest }) => {
  const userLogged = false;
  if (userLogged) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} component={Component} />;
};
