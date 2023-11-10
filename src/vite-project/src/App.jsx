import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import "./App.css";
import "./index.css";
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import Dashboard from './pages/dashboard.jsx';
import Voucher from './pages/voucherpage.jsx';
import Packages from './pages/packagespage.jsx';
import Subscriptions from './pages/subslist.jsx';
import SpecialPlace from './pages/subsaspecialplace.jsx';
import VoucherDetail from './pages/voucherdetail.jsx';
import PackageDetail from './pages/packagesdetail.jsx';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/voucher" element={<Voucher />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/specialplace" element={<SpecialPlace />} />
          <Route path="/voucherdetail" element={<VoucherDetail />} />
          <Route path="/packagesdetail" element={<PackageDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
