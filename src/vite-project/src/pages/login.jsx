import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import accountdummy from './accountdummy';
import NavbarAdmin from '../components/NavbarAdmin.jsx';
import axios from '../components/axiosConfig';
import { isTokenAvailable } from "../components/tokenConfig.jsx";

function Login() {
    const navigate = useNavigate();
    const [loggedInUser, setLoggedInUser] = useState(null);

    const requestLogin = async () => {
        try {
            const response = await axios.post('/login', { username, password });
            const data = response.data;
            if (response.status === 200) {
                localStorage.setItem('token', data.accessToken);
                const token = localStorage.getItem('token');
                const profile = await axios.get('/profile', { headers: { authorization: `${token}` } });
                const role = profile.data.role;
                setLoggedInUser({ username });
                console.log(role);
                navigate('/dashboard', { state: { role: role } });
            } else if (response.status === 401) {
                window.alert('Username or password tidak tepat, silahkan coba lagi');
            } else {
                window.alert('Kesalahan server, silahkan coba lagi');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    const SubmitButton = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const requestLogin = async () => {
            try {
              const response = await axios.post('/login', { username, password });
              const data = response.data;
              if (response.status === 200) {
                localStorage.setItem('token', data.accessToken);
                const token = localStorage.getItem('token');
                const profile = await axios.get('/profile', { headers: { authorization: `${token}` } });
                const role = profile.data.role;
                setLoggedInUser({ username });
                console.log(role);
                navigate('/dashboard');
              } else if (response.status === 401) {
                window.alert('Username or password tidak tepat, silahkan coba lagi');
              } else {
                window.alert('Kesalahan server, silahkan coba lagi');
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };

        requestLogin();

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
