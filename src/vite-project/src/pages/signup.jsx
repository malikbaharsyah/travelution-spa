import React from "react";
import { Link } from 'react-router-dom';

function Signup() {
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
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-1/2 px-3 mb-6">
                                <label className="block text-xl mb-2">First Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-1/2 px-3 mb-6">
                                <label className="block text-xl mb-2">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                        </div>
                        <Link to="/">
                            <button
                                type="button"
                                className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-10">
                                Sign Up
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;