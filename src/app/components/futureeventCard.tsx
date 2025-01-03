'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPastEvents } from '../[locale]/lib/functions';
import { getFutureEvents } from '../[locale]/lib/functions';
interface FutureEvents {
  id: string;
  title: string;
  date: Date | null;
  location: string;
  link: string | null;
  imageUrl: string;
  description: string;
}

const FutureEventCard = () => {
  React.useState<FutureEvents[]>([]);
  const [futureEvents, setFutureEvents] = React.useState<FutureEvents[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getFutureEvents();
      setFutureEvents(events);
    };
    fetchEvents();
  }, []);

  if (futureEvents.length === 0) {
    return (
      <div className="flex justify-center">
        <p>Fun Events coming soon!</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative h-48 w-full">
        <Image
          src="/runners.jpg"
          alt="RunnersUnidos Members    "
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-black">title</h3>

        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>date</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>location</span>
        </div>

        {/* <Link
              href={event.link ? event.link : 'No Link Available'}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              View Recap
            </Link> */}
      </div>
    </div>
  );
};

export default FutureEventCard;
