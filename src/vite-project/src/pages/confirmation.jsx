import React from "react";
import Navbar from '../components/Navbar.jsx'
import { Link, useNavigate } from 'react-router-dom';

const DataDummy1 = [
    {
        "tempat": "Tempat A",
        "waktuawal": "08:00",
        "waktuakhir": "10:00",
        "jumlahpengunjung": "1",
        "harga": "Rp 100.000"
    },
    {
        "tempat": "Tempat B",
        "waktuawal": "10:00",
        "waktuakhir": "14:00",
        "jumlahpengunjung": "1",
        "harga": "Rp 200.000"
    },
    {
        "tempat": "Tempat C",
        "waktuawal": "16:00",
        "waktuakhir": "18:00",
        "jumlahpengunjung": "1",
        "harga": "Rp 50.000"
    },
    {
        "tempat": "Tempat D",
        "waktuawal": "20:00",
        "waktuakhir": "22:00",
        "jumlahpengunjung": "1",
        "harga": "Rp 75.000"
    },
]

const DataDummy2 = [
    {
        "tempat": "Tempat AA",
        "waktuawal": "08:00",
        "waktuakhir": "17:00",
        "jumlahpengunjung": "1",
        "harga": "Rp 150.000"
    },
    {
        "tempat": "Tempat BB",
        "waktuawal": "18:00",
        "waktuakhir": "22:00",
        "jumlahpengunjung": "1",
        "harga": "Rp 45.000"
    },
]

const DataDummy3 = [
    {
        "tempat": "Tempat CC",
        "waktuawal": "08:00",
        "waktuakhir": "10:00",
        "jumlahpengunjung": "1",
        "harga": "Rp 70.000"
    },
    {
        "tempat": "Tempat DD",
        "waktuawal": "10:00",
        "waktuakhir": "11:00",
        "jumlahpengunjung": "1",
        "harga": "Rp 20.000"
    },
]


function ConfirmationTravelPlan() {
    const navigate = useNavigate();

    const KonfirmasiButton = () => {
        const confirmation = window.confirm('Yakin mau konfirmasi travel plan?');
    
        if (confirmation) {
          window.alert('Travel Plan berhasil dikonfirmasi!');
          navigate('/select-confirmation');
        }
    };

    return (
        <>
        <Navbar/>
        <h1 class="top-2 font-sans text-4xl font-bold py-10 text-center mt-5 mb-3">
            Informasi Rencana Perjalanan:
        </h1>
        <h2 class="font-sans text-2xl font-bold ml-10 mb-3">
            11 Agustus 2023
        </h2>
        <div class="flex">
          <table class="table-fixed ml-10 mb-16">
              <tr>
                  <th class="border-b border-gray-400 text-center p-6 w-96 text-xl">Tempat</th>
                  <th class="border-b border-gray-400 text-center p-6 w-60 text-xl">Waktu Awal</th>
                  <th class="border-b border-gray-400 text-center p-6 w-56 text-xl">Waktu Akhir</th>
                  <th class="border-b border-gray-400 text-center p-6 w-72 text-xl">Jumlah Pengunjung</th>
                  <th class="border-b border-gray-400 text-center p-6 w-80 text-xl">Harga</th>
              </tr>
              {DataDummy1.map((item1) => {
                return (
                    <tr>
                        <td class="border-b border-gray-400 text-center p-3">{item1.tempat}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item1.waktuawal}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item1.waktuakhir}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item1.jumlahpengunjung}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item1.harga}</td>
                    </tr>
                )
            })}
          </table>
        </div>
        <h2 class="font-sans text-2xl font-bold ml-10 mb-3">
            12 Agustus 2023
        </h2>
        <div class="flex">
          <table class="table-fixed ml-10 mb-10">
              <tr>
                  <th class="border-b border-gray-400 text-center p-6 w-96 text-xl">Tempat</th>
                  <th class="border-b border-gray-400 text-center p-6 w-60 text-xl">Waktu Awal</th>
                  <th class="border-b border-gray-400 text-center p-6 w-56 text-xl">Waktu Akhir</th>
                  <th class="border-b border-gray-400 text-center p-6 w-72 text-xl">Jumlah Pengunjung</th>
                  <th class="border-b border-gray-400 text-center p-6 w-80 text-xl">Harga</th>
              </tr>
              {DataDummy2.map((item2) => {
                return (
                    <tr>
                        <td class="border-b border-gray-400 text-center p-3">{item2.tempat}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item2.waktuawal}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item2.waktuakhir}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item2.jumlahpengunjung}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item2.harga}</td>
                    </tr>
                )
            })}
          </table>
        </div>
        <h2 class="font-sans text-2xl font-bold ml-10 mb-3">
            13 Agustus 2023
        </h2>
        <div class="flex">
          <table class="table-fixed ml-10 mb-10">
              <tr>
                  <th class="border-b border-gray-400 text-center p-6 w-96 text-xl">Tempat</th>
                  <th class="border-b border-gray-400 text-center p-6 w-60 text-xl">Waktu Awal</th>
                  <th class="border-b border-gray-400 text-center p-6 w-56 text-xl">Waktu Akhir</th>
                  <th class="border-b border-gray-400 text-center p-6 w-72 text-xl">Jumlah Pengunjung</th>
                  <th class="border-b border-gray-400 text-center p-6 w-80 text-xl">Harga</th>
              </tr>
              {DataDummy3.map((item3) => {
                return (
                    <tr>
                        <td class="border-b border-gray-400 text-center p-3">{item3.tempat}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item3.waktuawal}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item3.waktuakhir}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item3.jumlahpengunjung}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item3.harga}</td>
                    </tr>
                )
            })}
          </table>
        </div>
        <div class="flex justify-center">
            <button class="w-72 h-16 text-2xl mt-6 mb-16 voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={KonfirmasiButton}>
                Konfirmasi
            </button>
        </div>
      </>
    );
}

export default ConfirmationTravelPlan;