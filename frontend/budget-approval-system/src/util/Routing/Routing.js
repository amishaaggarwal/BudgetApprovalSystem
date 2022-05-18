// import Notfound from "pages/NotFound/NotFound";
import Dashboard from "pages/Dashboard/Dashboard";
import Login from "pages/Login/Login";
import Error404 from "pages/NotFound/Error404";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Routing;
