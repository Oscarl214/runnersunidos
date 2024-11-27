'use client';
import React from 'react';
import Trail from '@/public/TrailStrava.jpg';
import Image from 'next/image';
import Trail2 from '@/public/StraveRun2.jpg';

interface Image {
  src: string;
}

const Schedule = () => {
  const center = {
    lat: 32.774678231491606,
    lng: -96.82203693078834,
  };

  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`,
      '_blank'
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          Every Tuesday at 7:00 p.m.
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-2">🏃 2 Miles 🏃‍♀️</p>
        <p className="text-lg md:text-xl text-gray-600 mb-4">
          All skills welcome!
        </p>
        <p className="text-lg md:text-xl text-gray-600 mb-4">
          Feel free to arrive early to socialize and warm up.
        </p>
        <ul className="text-lg text-gray-700 mb-6">
          <li>Trinity Overlook Trail</li>
          <li> 📍 110 W Commerce Street</li>
        </ul>
        <button
          className="bg-pink-600 text-white hover:bg-pink-700 transition duration-200 ease-in-out py-3 px-8 rounded-lg font-semibold shadow-md transform hover:scale-105"
          onClick={handleGetDirections}
        >
          Get Directions
        </button>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Two Options, Same Trail!
        </h3>
        <div className="flex flex-col lg:flex-row md:flex-row justify-center gap-6">
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <Image
              src={Trail.src}
              alt="Trinity Overlook Trail"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              height={400}
              width={400}
            />
          </div>
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <Image
              src={Trail2.src}
              alt="Trinity Overlook Trail"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
