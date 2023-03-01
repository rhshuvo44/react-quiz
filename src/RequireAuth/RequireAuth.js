import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvaider";

const RequireAuth = ({ children }) => {
  //   const [loading, setLoading] = useState("");
  const { currentUser } = useAuth();
  const location = useLocation();
  //   if (loading) {
  //     return <p>...loading</p>;
  //   }
  if (currentUser) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequireAuth;
