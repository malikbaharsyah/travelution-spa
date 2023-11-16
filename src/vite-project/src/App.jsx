import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "./index.css";
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import Dashboard from './pages/dashboard.jsx';
import VoucherUser from './pages/voucherpageuser.jsx';
import VoucherAdmin from './pages/voucherpageadmin.jsx';
import PackagesUser from './pages/packagespageuser.jsx';
import PackagesAdmin from './pages/packagespageadmin.jsx';
import Subscriptions from './pages/subslist.jsx';
import SubscriptionsReq from './pages/subscriptionsreq.jsx';
import VoucherDetail from './pages/voucherdetailuser.jsx';
import VoucherDetailInfo from './pages/voucherdetailadmin.jsx';
import PackagesDetailConfirm from './pages/packagesdetailuser.jsx';
import PackagesDetailInfo from './pages/packagesdetailadmin.jsx';
import PackagesInfoFill from './pages/packagesinfofill.jsx';
import VoucherInfoFill from './pages/voucherinfofill.jsx';
import PackagesUpdateInfo from './pages/packagesupdateinfo.jsx';
import ChooseVoucher from './pages/choosevoucher.jsx';
import VoucherUseInfo from './pages/voucheruseinfo.jsx';
import SubsRegister from './pages/subsregister.jsx';

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
          <Route path="/vouchercheck" element={<VoucherUser />} />
          <Route path="/voucheredit" element={<VoucherAdmin />} />
          <Route path="/packagescheckout" element={<PackagesUser />} />
          <Route path="/packagesinfo" element={<PackagesAdmin />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/subscriptionsreq" element={<SubscriptionsReq />} />
          <Route path="/voucherdetail" element={<VoucherDetail />} />
          <Route path="/voucherdetailinfo" element={<VoucherDetailInfo />} />
          <Route path="/packagesdetailconfirm" element={<PackagesDetailConfirm />} />
          <Route path="/packagesdetailinfo" element={<PackagesDetailInfo />} />
          <Route path="/packagesinfofill" element={<PackagesInfoFill />} />
          <Route path="/voucherinfofill" element={<VoucherInfoFill />} />
          <Route path="/packagesupdateinfo" element={<PackagesUpdateInfo />} />
          <Route path="/choose-voucher" element={<ChooseVoucher />} />
          <Route path="/voucher-use-info" element={<VoucherUseInfo />} />
          <Route path="/subs-register" element={<SubsRegister />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
