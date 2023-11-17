import React, { useEffect, useState } from "react";
import packages from '../img/package.png'
import NavbarUser from '../components/NavbarUser.jsx'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../components/axiosConfig';

function PackagesPageUser() {
    const navigate = useNavigate();
    const [packagesData, setPackagesData] = useState([]);

    const KonfirmasiButton = (index) => {
        const confirmation = window.confirm('Yakin mau konfirmasi?');
    
        if (confirmation) {
            const confirmedPackage = packagesData[index];
            if (index === packagesData.length - 1) {
              navigate('/subs-register');
            } else {            
                window.alert('Paket Perjalanan Berhasil dikonfirmasi!');
            }
        }
    };


    useEffect(() => {
        axios.get('/package', {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                setPackagesData(response.data.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log('Error fetching packages data:', error);
            });
    }, []);

    return (
        <>
            <NavbarUser/>
            <h1 className="top-2 font-sans text-4xl font-bold py-10 ml-10">
                Package Tersedia:
            </h1>
            {packagesData.map((item, index) => (
                <div className="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6 ml-10 mr-10" key={index}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <img src={packages} alt="packages" className="w-16 h-16 ml-5 mr-7"/>
                            <div className="ml-4">
                                <h2 className="text-black text-3xl">{item.PackageName}</h2>
                                <h3 className="text-black text-xl pt-4">{item.PackageRoute}</h3>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <Link to={`/packagesdetailinfo/${item.PackageID}`}>
                                <button className="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
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