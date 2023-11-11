import React from "react";
import travelpic from '../img/purpletravel.jpg'
import Navbar from '../components/Navbar.jsx'
import { Link } from "react-router-dom";

function PlaceInformation() {
    return (
    <>
        <Navbar/>
        <div className="bg-white rounded-xl max-w-screen-2xl p-10 mt-5 mx-5">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 className="font-sans text-5xl font-bold text-black mb-5">
                    Tempat A
                </h1>
                <img src={travelpic} alt="Travel Pic" className="w-72 h-40" style={{ alignSelf: 'flex-start' }} />
          </div>
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <div>
                      <h2 class="text-black text-2xl font-bold -mt-24 mb-8">Bali, Indonesia</h2>
                      <h3 class="text-black text-xl font-bold pt-2">Informasi:</h3>
                      <h3 class="text-black text-sl pt-1">Harga: Rp. 100.000</h3>
                      <h3 class="text-black text-sl pt-1">Waktu Operasional: 08.00 - 17.00</h3>
                      <h3 class="text-black text-sl pt-1">Rating: 9/10</h3>
                      <h3 class="text-black text-xl font-bold pt-2">Deskripsi:</h3>
                      <h3 class="text-black text-sl pt-1 w-10/12">Tempat A adalah tempat wisata yang berada di Bandung, Indonesia. Tempat ini memiliki pemandangan yang indah dan cocok untuk berlibur bersama keluarga. Tempat ini memiliki fasilitas yang lengkap, seperti toilet, mushola, dan tempat makan. Tempat ini juga memiliki fasilitas yang ramah untuk penyandang disabilitas. Beragam jenis makanan dan minuman juga tersedia di tempat ini. Tempat ini juga memiliki fasilitas yang ramah untuk penyandang disabilitas. Berdasarkan rating dari pengunjung, tempat ini memiliki rating 9/10. Tempat ini juga memiliki fasilitas yang ramah untuk penyandang disabilitas. Oleh karena itu, tempat ini sangat cocok untuk dikunjungi bersama keluarga.</h3>
                      <h3 class="text-black text-xl font-bold pt-2">Kontak:</h3>
                      <h3 class="text-black text-sl pt-1">Telepon: 08123456789</h3>
                      <h3 class="text-black text-xl font-bold pt-2">Spesial:</h3>
                      <h3 class="text-black text-sl pt-1">Mendapatkan makanan dan minuman gratis khas Bali</h3>
                  </div>
              </div>
              <div class="flex justify-end mt-auto">
                <Link to="/select-travel-plan">
                    <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Tambahkan
                    </button>
                </Link>
              </div>
          </div>
        </div>
    </>
    );
}

export default PlaceInformation;