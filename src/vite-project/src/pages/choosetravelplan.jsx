import React from "react";
import packages from '../img/package.png'
import NavbarAdmin from '../components/NavbarAdmin.jsx'
import { Link } from 'react-router-dom';

const DataDummy = [
  {
    "name" : 'Travel Plan 1',
    "start" : "28 Mei 2023",
    "end" : "1 Juni 2023"
  },
  {
    "name" : 'Travel Plan 2',
    "start" : "11 Agustus 2023",
    "end" : "13 Agustus 2023"
  },
  {
    "name" : 'Travel Plan 3',
    "start" : "10 November 2023",
    "end" : "13 November 2023"
  },
  {
    "name" : 'Travel Plan 4',
    "start" : "31 Desember 2023",
    "end" : "2 Januari 2024"
  },
]


function ChooseTravelPlan() {
    return (
    <>
      <NavbarAdmin/>
      <h1 class="top-2 font-sans text-4xl font-bold py-10 ml-10">
		  Pilih Travel Plan:
      </h1>
      {DataDummy.map((item) => {
        return (
          <div class="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6 ml-10 mr-10">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <img src={packages} alt="packages" class="w-16 h-16 ml-5 mr-7"/>
                    <div class="ml-4">
                        <h2 class="text-black text-3xl">{item.name}</h2>
                        <h3 class="text-black text-xl pt-4">{item.start} - {item.end}</h3>
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
        )
       })}
    </>
    );
}

export default ChooseTravelPlan;