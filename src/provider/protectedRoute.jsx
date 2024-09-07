
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './authProvider';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }
  return user ? <Element {...rest} /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
