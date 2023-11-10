import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/landingpage.jsx';
import VoucherPage from './pages/voucherpage.jsx';
import "./App.css";
import "./index.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  return (
    <>
      <Navbar/>
      <LandingPage/>
    </>
  );
}

export default App;
