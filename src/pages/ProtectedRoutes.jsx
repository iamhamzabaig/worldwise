import { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated === undefined) {
    return <p>Checking authentication...</p>;
  }

  return isAuthenticated ? children : null;
}

export default ProtectedRoutes;
