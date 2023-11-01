import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LandingPage, Test } from "./RouterExports";
import Navbar from "./components/Navbar";

export default function Routing() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/a" element={<Test />} />
      </Routes>
    </Router>
  );
}
