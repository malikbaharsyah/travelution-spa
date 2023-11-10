import React from "react";
import LandingImage from "../img/seablue.jpg";

function LandingPage() {
    return (
      <div className="landingpage">
        <img src={LandingImage} id='landingimage' alt="landingimage" />
        <div className="titletext">
          <h1 class="mb-10 absolute top-64 text-9xl text-center w-full">TRAVELUTION</h1>
          <p class="text-3xl absolute bottom-60 text-center w-full">"Tentukan Perjalanan Sesuai Keinginanmu"</p>
        </div>
        <div className="aboutus">
            <h2 class="m-10 mt-20 text-4xl"><b>About Us</b></h2>
            <p class="m-10 mb-20">
                Travelution adalah sebuah platform online yang telah didedikasikan untuk memenuhi berbagai kebutuhan perjalanan bagi masyarakat luas di seluruh Indonesia. Dengan layanan yang komprehensif, pengguna dapat dengan mudah melakukan pemesanan tiket pesawat untuk perjalanan domestik atau internasional, mencari dan memesan akomodasi hotel sesuai dengan preferensi mereka, serta merencanakan petualangan tak terlupakan dengan pilihan pemesanan paket wisata yang beragam. Website ini dirancang dengan tujuan utama untuk memberikan kemudahan dan kenyamanan dalam merencanakan dan melaksanakan perjalanan, sekaligus membantu masyarakat menjelajahi berbagai destinasi menarik tanah air. Dengan Travelution, pengguna dapat memiliki pengalaman perjalanan yang lebih lancar dan dapat fokus sepenuhnya pada kesenangan dan petualangan mereka, tanpa harus khawatir tentang berbagai detail teknis yang terkait dengan perjalanan.
                <br></br><br></br>
                Website Travelution juga berupaya untuk memberikan berbagai opsi yang terjangkau dan beragam, sehingga setiap individu dapat menemukan solusi yang sesuai dengan anggaran dan kebutuhan mereka. Dengan demikian, Travelution bukan hanya sekadar platform pemesanan, tetapi juga mitra setia dalam menjadikan impian perjalanan menjadi kenyataan. Semua ini bertujuan untuk memfasilitasi perjalanan yang lebih mudah, menyenangkan, dan berkesan bagi semua orang, dengan harapan bahwa pengguna akan dapat mengeksplorasi keindahan alam dan budaya yang luar biasa di seluruh Indonesia.
            </p>
        </div>
      </div>
    );
  }
  

export default LandingPage;