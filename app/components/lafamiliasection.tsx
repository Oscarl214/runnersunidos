import React from 'react';
import RunnersImage from '@/public/runners.jpg';
import Image from 'next/image';
import Link from 'next/link';

interface Image {
  src: string;
}
const LaFamiliaSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={RunnersImage.src}
            alt="RunnersUnidos Members"
            fill
            className="rounded-lg object-cover"
            quality={100}
          />
        </div>
        <div className="text-black">
          <h1 className="mb-4 text-5xl font-bold">La Familia</h1>
          <p className="font-sans mb-8 text-xl">
            More than just runners, somos familia. Every Tuesday evening, our
            community comes together to share miles, stories, and traditions.
            From first-time runners to seasoned marathoners, we embrace everyone
            with the warmth and support that defines our cultura.
          </p>
          <div className="font-sans flex flex-col sm:flex-row gap-4">
            <Link
              href={'/gallery'}
              className="btn bg-transparent border-pink-500 hover:bg-pink-500 text-black"
            >
              View Photos
            </Link>
            <Link
              className="font-sans border-black bg-pink-500 hover:bg-transparent btn btn-outline text-black"
              href={'/joinus'}
            >
              Join Our Next Run
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaFamiliaSection;
