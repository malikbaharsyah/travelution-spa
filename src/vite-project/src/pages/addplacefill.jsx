import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function AddPlaceFill() {
    const navigate = useNavigate();

    const SubmitButton = () => {
        const confirmation = window.confirm('Yakin mau memasukkan tempat pada travel plan?');
    
        if (confirmation) {
          console.log('User confirmed the action');
          window.alert('Tempat berhasil dimasukkan!');
          navigate('/specialplace');
        } else {
          console.log('User canceled the action');
        }
    };
    return (
        <>
            <div className="flex justify-center text-black mt-11">
                <div className="p-6 rounded-lg shadow-md bg-gray-100 w-1/3 mb-20 mt-16">
                    <h1 className="font-sans text-4xl font-bold pt-5 mb-10 text-center">
                        Fill Information:
                    </h1>
                    <form className="space-y-4">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Tanggal Kunjungan</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Jumlah Pengunjung</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-1/2 px-3 mb-6">
                                <label className="block text-xl mb-2">Waktu Mulai</label>
                                <input
                                    type="time"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200 text-xs"
                                />
                            </div>
                            <div className="w-1/2 px-3 mb-6">
                                <label className="block text-xl mb-2">Waktu Selesai</label>
                                <input
                                    type="time"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200 text-xs"
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

export default AddPlaceFill;