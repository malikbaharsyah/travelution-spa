import React, { useState } from "react";
import NavbarAdmin from '../components/NavbarAdmin.jsx'

const DataDummy = [
    {
        "username": "bintang",
        "firstName": "Bintang",
        "lastName": "Hijriawan",
    },
    {
        "username": "jason",
        "firstName": "Jason",
        "lastName": "Rivalino",
    },
    {
        "username": "malik",
        "firstName": "Malik",
        "lastName": "Baharsyah",
    },
]

function SubscriptionsReq() {
    const [data, setData] = useState(DataDummy);

    const handleAccept = (username) => {
        const acceptConfirmation = window.confirm('Yakin mau menerima request subscription?');

        if (acceptConfirmation) {
            const updatedData = data.filter(item => item.username !== username);
            setData(updatedData);
            
            console.log(`Accepted: ${username}`);
            window.alert('Request Subscription Berhasil diterima! Pengguna sudah mendapatkan akses subscription!');
        }
    };

    const handleReject = (username) => {
        const rejectConfirmation = window.confirm('Yakin mau menolak request subscription?');

        if (rejectConfirmation) {
            console.log(`Rejected: ${username}`);
        }
    };

    return (
        <>
            <NavbarAdmin/>
            <h1 className="top-2 font-sans text-4xl font-bold py-10 text-center mt-5 mb-3">
                Daftar Request Subscriptions:
            </h1>
            <div className="flex justify-center items-center">
                <table className="table-fixed items-center">
                    <thead>
                        <tr>
                            <th className="border-b border-gray-400 text-center p-6 w-96 text-xl">Username</th>
                            <th className="border-b border-gray-400 text-center p-6 w-40 text-xl">First Name</th>
                            <th className="border-b border-gray-400 text-center p-6 w-40 text-xl">Last Name</th>
                            <th className="border-b border-gray-400 text-center p-6 w-72 text-xl">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DataDummy.map((item) => (
                            <tr key={item.username}>
                                <td className="border-b border-gray-400 text-center p-3">{item.username}</td>
                                <td className="border-b border-gray-400 text-center p-3">{item.firstName}</td>
                                <td className="border-b border-gray-400 text-center p-3">{item.lastName}</td>
                                <td className="border-b border-gray-400 text-center p-3">
                                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-5" onClick={() => handleAccept(item.username)}>
                                        Accept
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" onClick={() => handleReject(item.username)}>
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default SubscriptionsReq;
