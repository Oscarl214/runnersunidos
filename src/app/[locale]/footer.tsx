import React from 'react';
import DallasSkyline from '@/public/Dallas-Skyline.jpeg';
import Image from 'next/image';
import { CiInstagram } from 'react-icons/ci';
import Logo from '@/public/LOGOLONG.png';
const Footer = () => {
  return (
    <section className="container bg-white mx-auto lg:max-w-none px-4 py-6 ">
      <Image src={DallasSkyline} alt="logo" className="w-full" />
      <div className="flex justify-evenly flex-row items-center gap-2 mt-4">
        <Image
          src={Logo.src}
          alt="Logo"
          width={200}
          height={100}
          className="rounded-lg object-cover"
          quality={100}
        />
        <a
          href="https://www.instagram.com/runnersunidos"
          aria-label="Running Club Instagram Account"
          target="_blank"
        >
          <CiInstagram className="text-4xl text-orange-400" />
        </a>
      </div>
      <div className="flex justify-center  mb-10 mt-8">
        <span className="text-[10px] text-gray-500 sm:text-center dark:text-gray-400 hover:text-green-500">
          © 2024{' '}
          <a
            href="https://www.osworld.dev/"
            className="hover:underline"
            target="_blank"
            aria-label="Developers Website"
          >
            Created by Os World
          </a>
        </span>
      </div>
    </section>
  );
};

export default Footer;
