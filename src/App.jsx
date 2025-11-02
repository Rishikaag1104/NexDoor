import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import HelpRequests from "./pages/HelpRequests";
import Contact from "./pages/Contact";
import OfferHelp from "./pages/OfferHelp";
import PostRequest from "./pages/PostRequest";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OfferHelpForm from "./pages/OfferHelpForm";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      {/* Navbar */}
      <Navbar />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<HelpRequests />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offer" element={<OfferHelp />} />
        <Route path="/post-request" element={<PostRequest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/offer-help-form" element={<OfferHelpForm />} />




      </Routes>
    </Router>
  );
}

export default App;
