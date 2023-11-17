import React, { useEffect, useState } from "react";
import voucher from '../img/voucher.png'
import NavbarUser from '../components/NavbarUser.jsx'
import { Link } from 'react-router-dom';
import axios from '../components/axiosConfig';

const DataDummy = [
    {
      "name" : 'Voucher A',
      "desc" : "Diskon 10% khusus di hari Selasa",
    },
    {
      "name" : 'Voucher A',
      "desc" : "Diskon 10% khusus di hari Selasa",
    },
    {
      "name" : 'Voucher A',
      "desc" : "Diskon 10% khusus di hari Selasa",
    },
    {
      "name" : 'Voucher A',
      "desc" : "Diskon 10% khusus di hari Selasa",
    },
    {
      "name" : 'Voucher A',
      "desc" : "Diskon 10% khusus di hari Selasa",
    },
]    

function VoucherPageUser() {
    const GunakanButton = () => {
        const confirmation = window.confirm('Yakin mau menggunakan tiket?');
    
        if (confirmation) {
          window.alert('Tiket berhasil digunakan!');
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
      <NavbarUser/>
      <h1 class="top-2 font-sans text-4xl font-bold py-10 ml-10">
		  Voucher Tersedia:
      </h1>
      {voucherData.map((item) => {
        return (
            <div class="bg-white rounded-xl max-w-screen-2xl p-5 pt-5 mb-6 ml-10 mr-10">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <img src={voucher} alt="voucher" class="w-16 h-16 ml-5 mr-7"/>
                        <div class="ml-4">
                            <h2 class="text-black text-3xl">{item.VoucherName}</h2>
                            <h3 class="text-black text-xl pt-4">{item.VoucherDesc}</h3>
                        </div>
                    </div>
                    <div class="flex space-x-4">
                        <Link to="/voucherdetail">
                        <button class="voucher-detail-button bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Detail
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

export default VoucherPageUser;