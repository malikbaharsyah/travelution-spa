import React from "react";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className="flex justify-center text-black mt-28">
            <div className="p-6 rounded-lg shadow-md bg-gray-100 w-1/4">
            <h1 className="font-sans text-4xl font-bold py-10 text-center">
                Login Menu
            </h1>
                <form className="space-y-4">
                    <div className="mt-1">
                        <label className="block text-xl mb-5">Username</label>
                        <input type="text"className="w-full px-4 py-2 border rounded-md bg-blue-200"/>
                    </div>
                    <div>
                        <label className="block text-xl mb-5">Password</label>
                        <input type="password"className="w-full px-4 py-2 border rounded-md bg-blue-200 mb-14"/>
                    </div>
                    <Link to="/dashboard">
                        <button type="button" className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Login
                        </button>
                    </Link>
                </form>
                <p className="mt-6">
                    Don't have an account?{'  '}
                    <Link to="/signup" className="text-blue-700 hover:underline font-semibold">
                        Signup
                    </Link>
                </p>
            </div>
        </div>
        </>
    );
}

export default Login;