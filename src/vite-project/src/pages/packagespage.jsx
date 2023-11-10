import React from "react";
import packages from '../img/package.png'
import Navbar from '../components/Navbar.jsx'

function PackagesPage() {
    const KonfirmasiButton = () => {
        const confirmation = window.confirm('Yakin mau konfirmasi?');
    
        if (confirmation) {
        // Masuk database tiketnya
          console.log('User confirmed the action');
        } else {
        // Do nothing!
          console.log('User canceled the action');
        }
    };

    return (
    <>
      <Navbar/>
      <h1 class="top-2 font-sans text-4xl font-bold py-10 ml-10">
		  Voucher Tersedia:
      </h1>
        <div class="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6 ml-10 mr-10">
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <img src={packages} alt="packages" class="w-16 h-16 ml-5 mr-7"/>
                  <div class="ml-4">
                      <h2 class="text-black text-3xl">Package A</h2>
                      <h3 class="text-black text-xl pt-4">Bali</h3>
                  </div>
              </div>
              <div class="flex space-x-4">
                  <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Detail
                  </button>
                  <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={KonfirmasiButton}>
                      Konfirmasi
                  </button>
              </div>
          </div>
       </div>
       <div class="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6 ml-10 mr-10">
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <img src={packages} alt="packages" class="w-16 h-16 ml-5 mr-7"/>
                  <div class="ml-4">
                      <h2 class="text-black text-3xl">Package B</h2>
                      <h3 class="text-black text-xl pt-4">Jakarta</h3>
                  </div>
              </div>
              <div class="flex space-x-4">
                  <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Detail
                  </button>
                  <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={KonfirmasiButton}>
                      Konfirmasi
                  </button>
              </div>
          </div>
       </div>
       <div class="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6 ml-10 mr-10">
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <img src={packages} alt="packages" class="w-16 h-16 ml-5 mr-7"/>
                  <div class="ml-4">
                      <h2 class="text-black text-3xl">Package C</h2>
                      <h3 class="text-black text-xl pt-4">Yogyakarta</h3>
                  </div>
              </div>
              <div class="flex space-x-4">
                  <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Detail
                  </button>
                  <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={KonfirmasiButton}>
                      Konfirmasi
                  </button>
              </div>
          </div>
       </div>
    </>
    );
}

export default PackagesPage;