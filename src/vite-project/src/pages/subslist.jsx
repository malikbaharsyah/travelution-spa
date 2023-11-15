import React from "react";
import NavbarAdmin from '../components/NavbarAdmin.jsx'

const DataDummy = [
    {
        "username": "user1",
        "firstName": "John",
        "lastName": "Doe",
        "start": "2021-01-01",
        "end": "2021-12-31"
    },
    {
        "username": "user1",
        "firstName": "John",
        "lastName": "Doe",
        "start": "2021-01-01",
        "end": "2021-12-31"
    },
    {
        "username": "user1",
        "firstName": "John",
        "lastName": "Doe",
        "start": "2021-01-01",
        "end": "2021-12-31"
    },
    {
        "username": "user1",
        "firstName": "John",
        "lastName": "Doe",
        "start": "2021-01-01",
        "end": "2021-12-31"
    },
    {
        "username": "user1",
        "firstName": "John",
        "lastName": "Doe",
        "start": "2021-01-01",
        "end": "2021-12-31"
    },
    {
        "username": "user1",
        "firstName": "John",
        "lastName": "Doe",
        "start": "2021-01-01",
        "end": "2021-12-31"
    },
    {
        "username": "user1",
        "firstName": "John",
        "lastName": "Doe",
        "start": "2021-01-01",
        "end": "2021-12-31"
    },
    {
        "username": "user1",
        "firstName": "John",
        "lastName": "Doe",
        "start": "2021-01-01",
        "end": "2021-12-31"
    },
]


function SubscriptionsList() {
    return (
        <>
        <NavbarAdmin/>
        <h1 class="top-2 font-sans text-4xl font-bold py-10 text-center mt-5 mb-3">
            Daftar Pengguna Subscriptions:
        </h1>
        <div class="flex justify-center items-center">
          <table class="table-fixed items-center">
              <tr>
                  <th class="border-b border-gray-400 text-center p-6 w-96 text-xl">Username</th>
                  <th class="border-b border-gray-400 text-center p-6 w-40 text-xl">First Name</th>
                  <th class="border-b border-gray-400 text-center p-6 w-40 text-xl">Last Name</th>
                  <th class="border-b border-gray-400 text-center p-6 w-52 text-xl">Start</th>
                  <th class="border-b border-gray-400 text-center p-6 w-52 text-xl">End</th>
              </tr>
              {DataDummy.map((item) => {
                return (
                    <tr>
                        <td class="border-b border-gray-400 text-center p-3">{item.username}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item.firstName}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item.lastName}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item.start}</td>
                        <td class="border-b border-gray-400 text-center p-3">{item.end}</td>
                    </tr>
                )
            })}
          </table>
        </div>
      </>
    );
}

export default SubscriptionsList;