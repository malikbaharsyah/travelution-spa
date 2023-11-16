import React from "react";
import packages from '../img/package.png'
import NavbarUser from '../components/NavbarUser.jsx'
import { Link, useNavigate } from 'react-router-dom';

const DataDummy = [
    {
      "title" : 'Package A',
      "loc" : "Bali",
    },
    {
      "title" : 'Package B',
      "loc" : "Jakarta",
    },
    {
      "title" : 'Package C',
      "loc" : "Yogyakarta",
    },
]    

function PackagesPageUser() {
    const navigate = useNavigate();

    const KonfirmasiButton = (index) => {
        const confirmation = window.confirm('Yakin mau konfirmasi?');
    
        if (confirmation) {
            if (index === DataDummy.length - 1) {
              navigate('/subs-register');
            } else {
                window.alert('Paket Perjalanan Berhasil dikonfirmasi!');
            }
        }
    };

    return (
        <>
            <NavbarUser/>
            <h1 class="top-2 font-sans text-4xl font-bold py-10 ml-10">
                Package Tersedia:
            </h1>
            {DataDummy.map((item, index) => (
                <div class="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6 ml-10 mr-10" key={index}>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <img src={packages} alt="packages" class="w-16 h-16 ml-5 mr-7"/>
                            <div class="ml-4">
                                <h2 class="text-black text-3xl">{item.title}</h2>
                                <h3 class="text-black text-xl pt-4">{item.loc}</h3>
                            </div>
                        </div>
                        <div class="flex space-x-4">
                            <Link to="/packagesdetailconfirm">
                                <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    Detail
                                </button>
                            </Link>
                            <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => KonfirmasiButton(index)}>
                                Konfirmasi
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PackagesPageUser;
