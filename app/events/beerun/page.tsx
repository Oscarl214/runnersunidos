'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBeerRunImages } from '../../lib/functions';
import Image from 'next/image';
import Link from 'next/link';
interface Image {
  id: string;
  imageUrl: string;
}
const BeerRun = () => {
  const { data: images, isLoading } = useQuery({
    queryKey: ['beerimages'],
    queryFn: () => getBeerRunImages(),
  });

  const [visibleImages, setVisibleImages] = useState(3);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showNewButton, setShowNewButton] = useState(false);
  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 50);
    setShowNewButton(true);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-lg text-pink-500"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-light/5 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary mb-4">
            🍺 2 Mile Beer Run 🏃
          </h1>
          <p className="text-neutral-dark text-lg font-sans">
            What an amazing day, runners! On October 5th, we teamed up with{' '}
            <a
              href="https://www.goodsurf.co/"
              target="_blank"
              className="text-blue-500"
            >
              @realgoodsurf
            </a>{' '}
            for the 2-Mile Beer Dash, and it was a blast! Whether you were
            sprinting or strolling, the event was all about having fun, enjoying
            good company, and savoring a well-deserved brew at the finish line.
            Thanks to everyone who joined us for this unforgettable
            experience—lets keep the good vibes rolling until next time! Cheers
            to running, sipping, and riding the wave together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images?.slice(0, visibleImages).map((image: Image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
            >
              <Image
                src={image.imageUrl}
                alt="Dia De Los Muertos Images"
                fill
                className="object-cover transition-transform group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        {!showNewButton ? (
          <button
            className="bg-pink-500 font-sans hover:bg-primary-dark text-black px-8 py-3 rounded-lg  duration-200"
            onClick={loadMoreImages}
          >
            Load More Photos
          </button>
        ) : (
          <Link
            className="bg-pink-500 font-sans text-black px-8 py-3 rounded-lg transition-colors duration-200"
            href="/"
          >
            Back Home
          </Link>
        )}
      </div>
    </div>
  );
};

export default BeerRun;