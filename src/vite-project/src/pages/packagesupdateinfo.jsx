import React from "react";
import NavbarAdmin from '../components/NavbarAdmin.jsx'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from '../components/axiosConfig.jsx'

function PackagesUpdateFill() {
    const {id} = useParams();
    const navigate = useNavigate();
    const SubmitButton = () => {
        const namaPackage = document.getElementById('namaPackage').value;
        const kota = document.getElementById('kota').value;
        const rute = document.getElementById('rute').value;
        const deskripsi = document.getElementById('deskripsi').value;
        const waktuMulai = document.getElementById('waktuMulai').value;
        const waktuSelesai = document.getElementById('waktuSelesai').value;
        const harga = document.getElementById('harga').value;
        const confirmation = window.confirm('Yakin mau update informasi package?');
        const isHargaValid = Number.isInteger(Number(harga));

        if (namaPackage === '' || kota === '' || rute === '' || deskripsi === '' || waktuMulai === '' || waktuSelesai === '' || harga === '') {
            window.alert('Isi datanya mas/mbak!');
            return;
        }

        if (waktuMulai > waktuSelesai || harga < 0 || !isHargaValid) {
            window.alert('Data tidak valid');
            return;
        }
    
        if (confirmation) {
            console.log('Nama Package:', namaPackage);
            console.log('Kota:', kota);
            console.log('Rute:', rute);
            console.log('Deskripsi:', deskripsi);
            console.log('Waktu Mulai:', waktuMulai);
            console.log('Waktu Selesai:', waktuSelesai);
            console.log('Harga:', harga);
            console.log('Berhasil update informasi package!');
            window.alert('Informasi Package berhasil diperbaharui!');
            navigate('/packagesdetailinfo');
        }
    };
    return (
        <>
            <NavbarAdmin/>
            <div className="flex justify-center text-black mt-16">
                <div className="p-6 rounded-lg shadow-md bg-gray-100 w-1/3 mb-20 mt-10">
                    <h1 className="font-sans text-4xl font-bold pt-5 mb-10 text-center">
                        Update Package Information
                    </h1>
                    <form className="space-y-4">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Nama Package</label>
                                <input
                                    id="namaPackage"
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Kota</label>
                                <input
                                    id="kota"
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Rute</label>
                                <textarea
                                    id="rute"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                    rows="2"
                                ></textarea>
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Deskripsi</label>
                                <textarea
                                    id="deskripsi"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="w-1/2 px-3 mb-6">
                                <label className="block text-xl mb-2">Mulai</label>
                                <input
                                    id="waktuMulai"
                                    type="date"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-1/2 px-3 mb-6">
                                <label className="block text-xl mb-2">Selesai</label>
                                <input
                                    id="waktuSelesai"
                                    type="date"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Harga</label>
                                <input
                                    id="harga"
                                    type="number"
                                    inputMode="numeric"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                        </div>
                            <button
                                type="button"
                                className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-6" onClick={SubmitButton}>
                                Submit
                            </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PackagesUpdateFill;