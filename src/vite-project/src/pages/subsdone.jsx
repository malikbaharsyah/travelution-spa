import React from "react";
import NavbarUser from '../components/NavbarUser.jsx'
import { Link, useNavigate } from 'react-router-dom';

function SubsRegister() {
    return (
    <>
        <NavbarUser/>
        <div class="bg-white rounded-xl max-w-screen-2xl p-10 mt-40 mx-20">
        <h1 class="font-sans text-5xl font-bold text-black mb-10 text-center">
            Selamat kamu sudah terdaftar Subscriptions !!!
        </h1>
          <div class="flex justify-between items-center">
              <div class="flex items-center">
                  <div>
                      <h2 class="text-black text-2xl font-bold mb-3">Selamat menikmati beberapa fitur tambahan berikut:</h2>
                      <h3 class="text-black text-sl pt-1 w-5/6 text-justify">
                        1. Jangan lewatkan kesempatan untuk mendapatkan voucher spesial kami! Dengan setiap perjalanan, Anda bisa meraih voucher menarik yang memberikan diskon dan keuntungan tambahan di berbagai tempat partner kami.
                      </h3>
                      <h3 class="text-black text-sl pt-1 w-5/6 text-justify">
                        2. Pilihlah package perjalanan terbaik dari kami! Dengan ragam destinasi dan fasilitas premium, kami hadirkan pengalaman liburan yang sesuai dengan keinginan dan kebutuhan Anda. Temukan petualangan yang sempurna bersama kami.
                     </h3>
                  </div>
              </div>
              <div class="flex space-x-4 mt-32">
                  <Link to="/dashboard">
                    <button class="voucher-detail-button w-52 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Back to Menu
                    </button>
                  </Link>
              </div>
          </div>
        </div>
    </>
    );
}

export default SubsRegister;