import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import accountdummy from './accountdummy.jsx';

function Signup() {
    const navigate = useNavigate();

    const SignUpButton = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const phonenumber = document.getElementById('phonenumber').value;
        const confirmation = window.confirm('Apakah informasi akun sudah benar?');

        if (username === '' || password === '' || firstname === '' || lastname === '' || email === '' || phonenumber === '') {
            window.alert('Isi datanya mas/mbak!');
            return;
        } else if (!/^\d{1,13}$/.test(phonenumber)) {
            window.alert('Nomor telepon tidak valid!');
            return;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            window.alert('Email tidak valid!');
            return;
        }

        if (confirmation){
            const newAccount = {
                username,
                password,
            };
            accountdummy.push(newAccount);

            window.alert('Berhasil membuat akun!');
            navigate('/');
        }
    };

    return (
        <>
            <div className="flex justify-center text-black mt-24">
                <div className="p-6 rounded-lg shadow-md bg-gray-100 w-1/3 mb-20">
                    <h1 className="font-sans text-4xl font-bold py-10 text-center">
                        Signup Menu
                    </h1>
                    <form className="space-y-4">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-1/2 px-3 mb-6">
                                <label className="block text-xl mb-2">First Name</label>
                                <input
                                    id="firstname"
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-1/2 px-3 mb-6">
                                <label className="block text-xl mb-2">Last Name</label>
                                <input
                                    id="lastname"
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Phone Number</label>
                                <input
                                    id="phonenumber"
                                    type="tel"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                        </div>
                            <button
                                type="button"
                                className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-10" onClick={SignUpButton}>
                                Sign Up
                            </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;