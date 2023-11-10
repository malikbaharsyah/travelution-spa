import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import "./App.css";
import "./index.css";
import LandingPage from './pages/landingpage.jsx';
import Voucher from './pages/voucherpage.jsx';
import Packages from './pages/packagespage.jsx';
import Subscriptions from './pages/subslist.jsx';
import SpecialPlace from './pages/subsaspecialplace.jsx';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/voucher" element={<Voucher />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/specialplace" element={<SpecialPlace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
