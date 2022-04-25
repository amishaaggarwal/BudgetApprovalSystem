import { Navigate } from "react-router-dom";
import { getLocalStorage } from "util/Storage/Storage";

function PrivateRoute({ children }) {
  const user = JSON.parse(getLocalStorage("user"));
  return user ? children : <Navigate to="/" />;
}

export default PrivateRoute;
