import React from "react";
import NavbarAdmin from '../components/NavbarAdmin.jsx'
import { Link, useNavigate } from 'react-router-dom';

function VoucherDetail() {
    return (
    <>
        <NavbarAdmin/>
        <div class="bg-white rounded-xl max-w-screen-2xl p-10 my-44 mx-40">
        <h1 class="font-sans text-5xl font-bold text-black mb-10">
            Voucher A
        </h1>
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <div>
                      <h2 class="text-black text-2xl font-bold">Informasi:</h2>
                      <h3 class="text-black text-xl pt-2">Diskon 10% untuk pemesanan tiket di semua tempat</h3>
                      <h3 class="text-black text-sl pt-2">Mulai Berlaku: 1 Januari 2021</h3>
                      <h3 class="text-black text-sl pt-2">Berakhir: 31 Desember 2021</h3>
                  </div>
              </div>
              <div class="flex space-x-4 mt-20">
                    <Link to="/voucher">
                        <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Back to menu
                        </button>
                    </Link>
              </div>
          </div>
        </div>
    </>
    );
}

export default VoucherDetail;