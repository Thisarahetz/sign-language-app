import Nav from "../../Components/Nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";

function Router() {
  return (
    <>
      <body data-barba="wrapper">
        <div className="page-wrapper">
          <Nav />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </body>
    </>
  );
}

export default Router;
