import React from "react";
import NavbarAdmin from '../components/NavbarAdmin.jsx'
import { Link, useNavigate } from 'react-router-dom';

function TravelPlanInfoFill() {
    const navigate = useNavigate();
    const SubmitButton = () => {
        const namaTravelPlan = document.getElementById('namaTravelPlan').value;
        const waktuMulai = document.getElementById('waktuMulai').value;
        const waktuSelesai = document.getElementById('waktuSelesai').value;
        const confirmation = window.confirm('Yakin mau memasukkan tempat pada travel plan?');

        if (namaTravelPlan === '' || waktuMulai === '' || waktuSelesai === '') {
            window.alert('Isi datanya mas/mbak!');
            return;
        }

        if (waktuMulai > waktuSelesai) {
            window.alert('Data tidak valid');
            return;
        }
    
        if (confirmation) {
          window.alert('Paket Perjalanan Berhasil dibuat!');
          navigate('/create-travel-plan');
        }
    };
    return (
        <>
            <NavbarAdmin/>
            <div className="flex justify-center text-black mt-20">
                <div className="p-6 rounded-lg shadow-md bg-gray-100 w-1/3 mb-20 mt-10">
                    <h1 className="font-sans text-4xl font-bold pt-5 mb-10 text-center">
                        Create Travel Plan
                    </h1>
                    <form className="space-y-4">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Nama Travel Plan</label>
                                <input
                                    id="namaTravelPlan"
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
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

export default TravelPlanInfoFill;