import React from "react";
import NavbarAdmin from '../components/NavbarAdmin.jsx'
import { Link, useNavigate } from 'react-router-dom';

function VoucherInfoFill() {
    const navigate = useNavigate();
    const SubmitButton = () => {
        const namaVoucher = document.getElementById('namaVoucher').value;
        const descVoucher = document.getElementById('descVoucher').value;
        const confirmation = window.confirm('Yakin mau membuat voucher?');

        if (namaVoucher === '' || descVoucher === '') {
            window.alert('Isi datanya mas/mbak!');
            return;
        }
    
        if (confirmation) {
          console.log("Nama Voucher: " + namaVoucher);
            console.log("Deskripsi Voucher: " + descVoucher);
          console.log(`${namaVoucher} berhasil dibuat!`);
          window.alert('Voucher berhasil dibuat!');
          navigate('/voucheredit');
        }
    };
    return (
        <>
            <NavbarAdmin/>
            <div className="flex justify-center text-black mt-14">
                <div className="p-6 rounded-lg shadow-md bg-gray-100 w-1/3 mb-20 mt-10">
                    <h1 className="font-sans text-4xl font-bold pt-5 mb-10 text-center">
                        Add New Voucher
                    </h1>
                    <form className="space-y-4">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Nama Voucher</label>
                                <input
                                    id="namaVoucher"
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Deskripsi</label>
                                <textarea
                                    id="descVoucher"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                    rows="4"
                                ></textarea>
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

export default VoucherInfoFill;