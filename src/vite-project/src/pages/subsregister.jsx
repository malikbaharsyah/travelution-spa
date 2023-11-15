import React from "react";
import NavbarAdmin from '../components/NavbarAdmin.jsx'
import { Link, useNavigate } from 'react-router-dom';

function SubsRegister() {
    const navigate = useNavigate();
    const GunakanButton = () => {
        const confirmation = window.confirm('Yakin mau daftar subscription?');
    
        if (confirmation) {
          window.alert('Sudah berhasil mendaftarkan, silahkan tunggu konfirmasi dari admin');
          navigate('/dashboard');
        }
    };

    return (
    <>
        <NavbarAdmin/>
        <div class="bg-white rounded-xl max-w-screen-2xl p-10 mt-32 mx-20">
        <h1 class="font-sans text-5xl font-bold text-black mb-10 text-center">
            Ayo Daftarkan Subscriptions !!!
        </h1>
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <div>
                      <h2 class="text-black text-2xl font-bold mb-3">Keuntungan:</h2>
                      <h3 class="text-black text-sl pt-1 w-5/6 text-justify">
                        1. Nikmati pengalaman perjalanan yang tak terlupakan dengan promo spesial kami. Dapatkan penawaran eksklusif untuk beberapa destinasi pilihan yang pasti akan membuat liburan Anda lebih istimewa.
                      </h3>
                      <h3 class="text-black text-sl pt-1 w-5/6 text-justify">
                        2. Jangan lewatkan kesempatan untuk mendapatkan voucher spesial kami! Dengan setiap perjalanan, Anda bisa meraih voucher menarik yang memberikan diskon dan keuntungan tambahan di berbagai tempat partner kami.
                      </h3>
                      <h3 class="text-black text-sl pt-1 w-5/6 text-justify">
                        3. Pilihlah package perjalanan terbaik dari kami! Dengan ragam destinasi dan fasilitas premium, kami hadirkan pengalaman liburan yang sesuai dengan keinginan dan kebutuhan Anda. Temukan petualangan yang sempurna bersama kami.
                     </h3>
                  </div>
              </div>
              <div class="flex space-x-4 mt-44">
                  <button class="voucher-detail-button w-52 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={GunakanButton}>
                      Daftar Subscriptions
                  </button>
              </div>
          </div>
        </div>
    </>
    );
}

export default SubsRegister;