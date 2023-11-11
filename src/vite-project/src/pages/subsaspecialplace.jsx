import React from "react";
import travelpic from '../img/purpletravel.jpg'
import Navbar from '../components/Navbar.jsx'
import { Link } from "react-router-dom";

const DataDummy = [
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
  {
    "img" : travelpic,
    "title" : 'Tempat AB',
    "loc" : "Bali, Indonesia",
  },
]

function SubsSpecialPlace() {
    return (
    <>
        <Navbar/>
        <h1 class="top-2 font-sans text-4xl font-bold py-10 text-center mb-4">
            Daftar Tempat Spesial Subscriptions:
        </h1>
        <div className="mb-20 flex flex-wrap px-10 gap-9 justify-start ml-3">
          {DataDummy.map((item) => {
            return (
              <Link to ='/placeinformation'>
                <div className="">
                  <img src={item.img} className="w-52 h-32 rounded-2xl mb-3"/>
                  <h2 className="text-2xl "> {item.title} </h2>
                  <h3 className="text-xs "> {item.loc} </h3>
                </div>
              </Link>
            )
          })}
        </div>
    </>
    );
}

export default SubsSpecialPlace;