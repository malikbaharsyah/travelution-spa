import React from "react";
import NavbarUser from '../components/NavbarUser.jsx'
import { Link, useNavigate } from 'react-router-dom';

function PackagesDetail() {
    const navigate = useNavigate();
    const GunakanButton = () => {
        const confirmation = window.confirm('Yakin mau konfirmasi?');
    
        if (confirmation) {
          console.log('Paket Perjalanan Berhasil dikonfirmasi!');
          window.alert('Paket Perjalanan Berhasil dikonfirmasi!');
          navigate('/packagescheckout');
        }
    };

    return (
    <>
        <NavbarUser/>
        <div class="bg-white rounded-xl max-w-screen-2xl p-10 mt-40 mx-40">
        <h1 class="font-sans text-5xl font-bold text-black mb-3">
            Package A
        </h1>
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <div>
                      <h2 class="text-black text-2xl font-bold">Bali</h2>
                      <h3 class="text-black text-xl pt-2 mb-8">Pantai Kuta - Tanah Lot - Garuda Wisnu Kencana - Pantai Pandawa - Nusa Penida - Pantai Sanur - 
                      <br></br>Tanjung Benoa</h3>
                      <h3 class="text-black text-sl pt-1">Nikmati liburan di Bali dengan harga terjangkau!</h3>
                      <h3 class="text-black text-sl pt-1">11 November 2023 - 13 November 2023</h3>
                      <h3 class="text-black text-sl pt-1 font-bold">Rp3.200.000</h3>
                  </div>
              </div>
              <div class="flex space-x-4 mt-44">
                  <Link to="/choose-voucher" className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-44 text-center">
                        Gunakan Voucher
                  </Link>
                  <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={GunakanButton}>
                      Konfirmasi
                  </button>
              </div>
          </div>
        </div>
    </>
    );
}

export default PackagesDetail;