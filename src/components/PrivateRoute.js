import React from "react";
import { Navigate } from "react-router-dom";
import { Cookies } from "react-cookie";

const PrivateRoute = ({ children }) => {
  const cookies = new Cookies();
  if (cookies.get("token") === undefined) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default PrivateRoute;
