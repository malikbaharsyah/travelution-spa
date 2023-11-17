import React, { useEffect, useState } from "react";
import voucher from '../img/voucher.png'
import NavbarAdmin from '../components/NavbarAdmin.jsx'
import { Link } from 'react-router-dom';
import axios from '../components/axiosConfig';

const DataDummy = [
    {
      "name" : 'Voucher A',
      "desc" : "Diskon 10% khusus di hari Selasa",
    },
    {
      "name" : 'Voucher B', 
      "desc" : "Diskon 10% khusus di hari Rabu",
    },
    {
      "name" : 'Voucher C', 
      "desc" : "Diskon 10% khusus di hari Kamis",
    },
    {
      "name" : 'Voucher D', 
      "desc" : "Diskon 10% khusus di hari Jumat",
    },
    {
      "name" : 'Voucher E', 
      "desc" : "Diskon 10% khusus di hari Sabtu",
    },
];   

const VoucherPage = () => {
    const GunakanButton = (index) => {
        const confirmation = window.confirm('Yakin mau menghapus voucher?');

        if (confirmation) {
            const deleteVoucher = DataDummy[index];
            console.log(`${deleteVoucher.name} berhasil dihapus!`);
            window.alert('Voucher berhasil dihapus!');
        }
    };

    const [voucherData, setVoucherData] = useState([]);

    useEffect(() => {
        axios.get('/voucher', {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                setVoucherData(response.data.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log('Error fetching packages data:', error);
            });
    }, []);
    return (
    <>
      <NavbarAdmin/>
      <h1 class="top-2 font-sans text-4xl font-bold py-10 ml-10">
		  Voucher Tersedia:
      </h1>
      {voucherData.map((item, index) => {
        return (
            <div class="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6 ml-10 mr-10" key={index}>
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <img src={voucher} alt="voucher" class="w-16 h-16 ml-5 mr-7"/>
                        <div class="ml-4">
                            <h2 class="text-black text-3xl">{item.VoucherName}</h2>
                            <h3 class="text-black text-xl pt-4">{item.VoucherDesc}</h3>
                        </div>
                    </div>
                    <div class="flex space-x-4">
                        <Link to="/voucherdetailinfo">
                        <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Detail
                        </button>
                        </Link>
                        <button class="voucher-detail-button bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" onClick={() => GunakanButton(index)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            )
        })}
        <div style={{ position: 'fixed', bottom: '35px', right: '50px' }}>
            <Link to="/voucherinfofill">
                <button
                        className="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full"
                        style={{ borderRadius: '50%', width: '100px', height: '60px' }}
                    >   Add +
                </button>
            </Link>
        </div>
    </>
    );
}

export default VoucherPage;