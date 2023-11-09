import React from "react";
import "../style/voucherpage.css";
import voucher from './img/voucher.png'

function VoucherPage() {
    return (
    <>
      <h1 class="top-2 font-sans text-4xl font-bold py-10">
		  Voucher Tersedia:
      </h1>
        <div class="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6">
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <img src={voucher} alt="voucher" class="w-16 h-16 ml-5 mr-7"/>
                  <div class="ml-4">
                      <h2 class="text-black text-3xl">Voucher A</h2>
                      <h3 class="text-black text-xl pt-4">Diskon 10% khusus di hari Selasa</h3>
                  </div>
              </div>
              <div class="flex space-x-4">
                  <div class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Detail
                  </div>
                  <div class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Gunakan
                  </div>
              </div>
          </div>
       </div>
       <div class="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6">
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <img src={voucher} alt="voucher" class="w-16 h-16 ml-5 mr-7"/>
                  <div class="ml-4">
                      <h2 class="text-black text-3xl">Voucher A</h2>
                      <h3 class="text-black text-xl pt-4">Diskon 10% khusus di hari Selasa</h3>
                  </div>
              </div>
              <div class="flex space-x-4">
                  <div class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Detail
                  </div>
                  <div class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Gunakan
                  </div>
              </div>
          </div>
       </div>
       <div class="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6">
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <img src={voucher} alt="voucher" class="w-16 h-16 ml-5 mr-7"/>
                  <div class="ml-4">
                      <h2 class="text-black text-3xl">Voucher A</h2>
                      <h3 class="text-black text-xl pt-4">Diskon 10% khusus di hari Selasa</h3>
                  </div>
              </div>
              <div class="flex space-x-4">
                  <div class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Detail
                  </div>
                  <div class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                      Gunakan
                  </div>
              </div>
          </div>
       </div>
    </>
    );
}

export default VoucherPage;