import Loader from "components/Loader/Loader";
import Dashboard from "pages/Dashboard/Dashboard";
import Login from "pages/Login/Login";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const Error404 = lazy(() => import("pages/NotFound/Error404"));

function Routing() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" index element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Suspense>
  );
}

export default Routing;
