import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import accountdummy from './accountdummy';
import NavbarAdmin from '../components/NavbarAdmin.jsx';

function Login() {
    const navigate = useNavigate();
    const [loggedInUser, setLoggedInUser] = useState(null);

    const SubmitButton = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log('Username:', username);
        console.log('Password:', password);

        const user = accountdummy.find(
            (cred) => cred.username === username && cred.password === password
          );
      
          if (user) {
            setLoggedInUser(user);
            console.log('Berhasil login!');
            navigate('/dashboard', { state: { role: user.role } });
          } else {
            window.alert('Username or password tidak tepat, silahkan coba lagi');
          }
        };

    return (
        <>
            {loggedInUser ? (
                <NavbarAdmin username={loggedInUser} />
            ) : (
                <div className="flex justify-center text-black mt-28">
                    <div className="p-6 rounded-lg shadow-md bg-gray-100 w-1/4">
                        <h1 className="font-sans text-4xl font-bold py-10 text-center">
                            Login Menu
                        </h1>
                        <form className="space-y-4">
                            <div className="mt-1">
                                <label className="block text-xl mb-5">Username</label>
                                <input type="text" className="w-full px-4 py-2 border rounded-md bg-blue-200" id="username" />
                            </div>
                            <div>
                                <label className="block text-xl mb-5">Password</label>
                                <input type="password" className="w-full px-4 py-2 border rounded-md bg-blue-200 mb-8" id="password" />
                            </div>
                            <button type="button" className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={SubmitButton}>
                                Login
                            </button>
                        </form>
                        <p className="mt-6">
                            Don't have an account?{'  '}
                            <Link to="/signup" className="text-blue-700 hover:underline font-semibold">
                                Signup
                            </Link>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Login;
