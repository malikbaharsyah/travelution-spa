import React from "react";
import packages from '../img/package.png'
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom';

function ChooseTravelPlan() {
    const KonfirmasiButton = () => {
        const confirmation = window.confirm('Yakin mau konfirmasi?');
    
        if (confirmation) {
        // Masuk database tiketnya
          console.log('User confirmed the action');
          window.alert('Paket Perjalanan Berhasil dikonfirmasi!');
        } else {
        // Do nothing!
          console.log('User canceled the action');
        }
    };

    return (
    <>
      <Navbar/>
      <h1 class="top-2 font-sans text-4xl font-bold py-10 ml-10">
		  Pilih Travel Plan:
      </h1>
        <div class="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6 ml-10 mr-10">
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <img src={packages} alt="packages" class="w-16 h-16 ml-5 mr-7"/>
                  <div class="ml-4">
                      <h2 class="text-black text-3xl">Travel Plan 1</h2>
                      <h3 class="text-black text-xl pt-4">28 Mei 2023 - 1 Juni 2023</h3>
                  </div>
              </div>
              <div class="flex space-x-4">
                <Link to="/add-place-fill">
                  <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Masukkan
                  </button>
                </Link>
              </div>
          </div>
       </div>
       <div class="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6 ml-10 mr-10">
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <img src={packages} alt="packages" class="w-16 h-16 ml-5 mr-7"/>
                  <div class="ml-4">
                      <h2 class="text-black text-3xl">Travel Plan 2</h2>
                      <h3 class="text-black text-xl pt-4">11 Agustus 2023 - 13 Agustus 2023</h3>
                  </div>
              </div>
              <div class="flex space-x-4">
                <Link to="/add-place-fill">
                  <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Masukkan
                  </button>
                </Link>
              </div>
          </div>
       </div>
       <div class="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6 ml-10 mr-10">
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <img src={packages} alt="packages" class="w-16 h-16 ml-5 mr-7"/>
                  <div class="ml-4">
                      <h2 class="text-black text-3xl">Travel Plan 3</h2>
                      <h3 class="text-black text-xl pt-4">10 November 2023 - 13 November 2023</h3>
                  </div>
              </div>
              <div class="flex space-x-4">
                <Link to="/add-place-fill">
                  <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Masukkan
                  </button>
                </Link>
              </div>
          </div>
       </div>
    </>
    );
}

export default ChooseTravelPlan;