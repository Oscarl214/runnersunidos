import React from 'react';
import Image from 'next/image';
import SkullImage from '@/public/DiaDeLosMuertos.jpg';
import Link from 'next/link';

interface Image {
  src: string;
}
const EventSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={SkullImage.src}
            alt="Dia de los Muertos 5K Run"
            fill
            className="rounded-lg object-cover"
            quality={100}
          />
        </div>
        <div className="text-black">
          <h1 className="mb-8 text-5xl font-bold">Dia de los Muertos 5K</h1>
          <p className="mb-4 text-xl">
            Our community came together to honor and remember our loved ones in
            a beautiful celebration of life during our 5K event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={'/gallery'} className="btn bg-black text-white">
              View Event Photos
            </Link>
            <button className="btn btn-outline btn-secondary">Events</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
