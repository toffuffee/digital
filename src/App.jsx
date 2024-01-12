import { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Help from "./components/help/Help";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import Footer from "./components/footer/Footer";
import Profile from "./components/profile/Profile";
import Graph from "./components/graph/GraphPage";
import { AuthProvider } from "./components/authContext/AuthContext";
import "./App.css";
import "normalize.css";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/graph" element={<Graph />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
