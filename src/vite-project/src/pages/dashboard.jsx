import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import DashboardImage from "../img/seablue.jpg";
import NavbarAdmin from '../components/NavbarAdmin.jsx'
import NavbarUser from '../components/NavbarUser.jsx'
import axios from '../components/axiosConfig'
import NavBar from '../components/Navbar';

  function Dashboard() {
    const location = useLocation();
    const role = localStorage.getItem('role');
    console.log(role);
    return (
      <>
        {/* Condition based on role */}
        {role === "Admin" ? <NavbarAdmin /> : <NavbarUser />}
        <div className="landingpage">
          <img src={DashboardImage} id='landingimage' alt="landingimage" className="w-full" />
          <div className="titletext absolute top-72 w-full text-center">
            <h1 className="text-5xl md:text-9xl mb-10">TRAVELUTION</h1>
            <p className="text-lg md:text-3xl">"Tentukan Perjalanan Sesuai Keinginanmu"</p>
          </div>
          <div className="aboutus text-center md:text-left">
            <h2 className="m-10 mt-20 text-3xl md:text-4xl"><b>About Us</b></h2>
            <p className="m-10 mb-20 text-sm md:text-lg">
              Travelution adalah sebuah platform online yang telah didedikasikan untuk memenuhi berbagai kebutuhan perjalanan bagi masyarakat luas di seluruh Indonesia. Dengan layanan yang komprehensif, pengguna dapat dengan mudah melakukan pemesanan tiket pesawat untuk perjalanan domestik atau internasional, mencari dan memesan akomodasi hotel sesuai dengan preferensi mereka, serta merencanakan petualangan tak terlupakan dengan pilihan pemesanan paket wisata yang beragam. Website ini dirancang dengan tujuan utama untuk memberikan kemudahan dan kenyamanan dalam merencanakan dan melaksanakan perjalanan, sekaligus membantu masyarakat menjelajahi berbagai destinasi menarik tanah air. Dengan Travelution, pengguna dapat memiliki pengalaman perjalanan yang lebih lancar dan dapat fokus sepenuhnya pada kesenangan dan petualangan mereka, tanpa harus khawatir tentang berbagai detail teknis yang terkait dengan perjalanan.
                  <br></br><br></br>
              Website Travelution juga berupaya untuk memberikan berbagai opsi yang terjangkau dan beragam, sehingga setiap individu dapat menemukan solusi yang sesuai dengan anggaran dan kebutuhan mereka. Dengan demikian, Travelution bukan hanya sekadar platform pemesanan, tetapi juga mitra setia dalam menjadikan impian perjalanan menjadi kenyataan. Semua ini bertujuan untuk memfasilitasi perjalanan yang lebih mudah, menyenangkan, dan berkesan bagi semua orang, dengan harapan bahwa pengguna akan dapat mengeksplorasi keindahan alam dan budaya yang luar biasa di seluruh Indonesia.
            </p>
          </div>
        </div>
    </>
  );
}

export default Dashboard;