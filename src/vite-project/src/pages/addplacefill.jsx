import React from "react";
import NavbarAdmin from '../components/NavbarAdmin.jsx'
import { Link, useNavigate } from 'react-router-dom';

function AddPlaceFill() {
    const navigate = useNavigate();

    const SubmitButton = () => {
        const tanggalKunjungan = document.getElementById('tanggalKunjungan').value;
        const jumlahPengunjung = document.getElementById('jumlahPengunjung').value;
        const waktuMulai = document.getElementById('waktuMulai').value;
        const waktuSelesai = document.getElementById('waktuSelesai').value;
        const confirmation = window.confirm('Yakin mau memasukkan tempat pada travel plan?');

        if (tanggalKunjungan === '' || jumlahPengunjung === '' || waktuMulai === '' || waktuSelesai === '') {
            window.alert('Isi datanya mas/mbak!');
            return;
        }

        if (waktuMulai > waktuSelesai || jumlahPengunjung < 1) {
            window.alert('Data tidak valid');
            return;
        }
    
        if (confirmation) {
          window.alert('Tempat berhasil dimasukkan!');
          navigate('/specialplace');
        }
    };

    return (
        <>
            <NavbarAdmin/>
            <div className="flex justify-center text-black mt-11">
                <div className="p-6 rounded-lg shadow-md bg-gray-100 w-1/3 mb-10 mt-8">
                    <h1 className="font-sans text-4xl font-bold pt-5 mb-10 text-center">
                        Fill Information:
                    </h1>
                    <form className="space-y-4">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Tanggal Kunjungan</label>
                                <input
                                    id="tanggalKunjungan"
                                    type="date"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Jumlah Pengunjung</label>
                                <input
                                    id="jumlahPengunjung"
                                    type="number"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-1/2 px-3">
                                <label className="block text-xl mb-2">Waktu Mulai</label>
                                <input
                                    id="waktuMulai"
                                    type="time"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200 text-xs"
                                />
                            </div>
                            <div className="w-1/2 px-3">
                                <label className="block text-xl mb-2">Waktu Selesai</label>
                                <input
                                    id="waktuSelesai"
                                    type="time"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200 text-xs"
                                />
                            </div>
                        </div>
                        <p>
                            <Link to="/choose-voucher" className="text-blue-700 hover:underline font-semibold">
                                Gunakan Voucher
                            </Link>
                        </p>
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

export default AddPlaceFill;