import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ user, children }) {
  //   return user ? children : <h2>Not Allowed </h2>;
  return user ? children : <Navigate to="/" />;
}
