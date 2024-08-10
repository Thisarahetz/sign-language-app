import Nav from "../../Components/Nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import Login from "../Login";
import SignUp from "../SignUp";
import Home from "../Home";

function Router() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        
      </Routes>
    </>
  );
}

export default Router;
