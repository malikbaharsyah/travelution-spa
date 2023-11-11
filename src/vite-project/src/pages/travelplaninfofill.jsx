import React from "react";
import { Link } from 'react-router-dom';

function TravelPlanInfoFill() {
    const SubmitButton = () => {
        const confirmation = window.confirm('Yakin mau membuat travel plan?');
    
        if (confirmation) {
        // Masuk database tiketnya
          console.log('User confirmed the action');
          window.alert('Paket Perjalanan Berhasil dibuat!');
        } else {
        // Do nothing!
          console.log('User canceled the action');
        }
    };
    return (
        <>
            <div className="flex justify-center text-black mt-20">
                <div className="p-6 rounded-lg shadow-md bg-gray-100 w-1/3 mb-20 mt-16">
                    <h1 className="font-sans text-4xl font-bold pt-5 mb-10 text-center">
                        Create Travel Plan
                    </h1>
                    <form className="space-y-4">
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full px-3 mb-6">
                                <label className="block text-xl mb-2">Nama Travel Plan</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-1/2 px-3 mb-6">
                                <label className="block text-xl mb-2">Mulai</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                            <div className="w-1/2 px-3 mb-6">
                                <label className="block text-xl mb-2">Selesai</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 border rounded-md bg-blue-200"
                                />
                            </div>
                        </div>
                        <Link to="/create-travel-plan">
                            <button
                                type="button"
                                className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-6" onClick={SubmitButton}>
                                Submit
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default TravelPlanInfoFill;