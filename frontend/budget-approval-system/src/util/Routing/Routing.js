import BillTable from "components/BillTable/BillTable";
import Loader from "components/Loader/Loader";
import UserCard from "components/UserCard/UserCard";
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
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/" index element={<UserCard />} />
            <Route
              path="/dashboard/mybills"
              element={<BillTable emp={true} />}
            />
            <Route path="/dashboard/bills" element={<BillTable />} />
          </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Suspense>
  );
}

export default Routing;
