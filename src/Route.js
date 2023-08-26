import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { myContex } from './Component/ContexApi/Contex';
import LogIn from './Component/ContectUS/Authentication/LogIn';

function PrivateRoute({ path, element }) {
  const { token } = useContext(myContex);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Route path={path} element={element} />;
}

export default PrivateRoute;
