// import Notfound from "pages/NotFound/NotFound";
import Login from "pages/Login/Login";
import { Route, Routes } from "react-router-dom";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="*" element={<Notfound />} /> */}
      </Routes>
    </div>
  );
}

export default Routing;
