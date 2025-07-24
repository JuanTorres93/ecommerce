import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { getUsername } from "../features/user/userSlice";

function ProtectedRoute({ children }) {
  const username = useSelector(getUsername);
  const isAuthenticated = Boolean(username); // Check if the user is authenticated based on the presence of a username in the Redux store
  // In a real application this would not be enough, but for this example I'm not going to implement a full authentication system
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated && children;
}

export default ProtectedRoute;
