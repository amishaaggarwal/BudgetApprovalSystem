import Dashboard from "pages/Dashboard/Dashboard";
import { Navigate } from "react-router-dom";
import { getLocalStorage } from "util/Storage/Storage";

function PrivateRoute({ children }) {
  const user = getLocalStorage("user");
  return user ? children : <Navigate to="/" />;
  // if (user) {
  //   if (user.email === "admin@bms.com")
  //     return <Dashboard heading={"Admin Dashboard"} />;
  //   else return children;
  // } else <Navigate to="/" />;
}

export default PrivateRoute;
