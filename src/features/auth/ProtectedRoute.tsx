import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute() {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    // Redirect to login; remember where we tried to go
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // If logged in, render the child route(s)
  return <Outlet />;
}
