import React, { useState } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { getAccessToken } from './Jwt';

const AuthGuard = (props: any) => {
  const { children } = props
  const [token, setToken] = useState(getAccessToken())

  if (!token) {
    return (
      <Navigate to="/signin" />
    )
  }
  return (
    children
  )
};

export default AuthGuard;
