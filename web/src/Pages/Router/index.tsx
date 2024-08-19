import Nav from "../../Components/Nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import Login from "../Login";
import SignUp from "../SignUp";
import Home from "../Home";
import Learn from "../Learn";
import Practice from "../Practice";
import Resource from "../Resource";

function Router() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/learn" element={<Learn/>} />
        <Route path="learn/resource/practice" element={<Practice/>} />
        <Route path="/learn/resource" element={<Resource/>} />
         
      </Routes>
    </>
  );
}

export default Router;
