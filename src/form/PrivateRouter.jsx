import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (auth) {
    return <>{children}</>;
  } else {
    return <Navigate to="/account/create" replace />;
  }
};
