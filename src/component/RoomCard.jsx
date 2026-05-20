'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiUsers, FiMapPin, FiWifi } from 'react-icons/fi';

const RoomCard = ({ room }) => {

  const {
    _id,
    roomName,
    description,
    image,
    floor,
    capacity,
    hourlyRate,
    amenities
  } = room;

  return (
    <div className="group bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">

      {/* IMAGE */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={roomName}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* price badge */}
        <div className="absolute top-3 right-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          ${hourlyRate}/hr
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-4">

        {/* TITLE */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 transition-colors">
            {roomName}
          </h2>

          <p className="text-sm text-slate-500 dark:text-zinc-400 line-clamp-3 mt-1">
            {description}
          </p>
        </div>

        {/* INFO */}
        <div className="flex items-center justify-between text-sm text-slate-600 dark:text-zinc-400">

          <div className="flex items-center gap-2">
            <FiMapPin className="text-indigo-500" />
            <span>{floor}</span>
          </div>

          <div className="flex items-center gap-2">
            <FiUsers className="text-indigo-500" />
            <span>{capacity} Seats</span>
          </div>
        </div>

        {/* AMENITIES */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-zinc-400 mb-2">
            Amenities
          </h3>

          <div className="flex flex-wrap gap-2">
            {Array.isArray(amenities) &&
              amenities.map((item, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full 
                  bg-gradient-to-r from-indigo-50 to-purple-50 
                  dark:from-zinc-800 dark:to-zinc-900 
                  text-indigo-600 dark:text-zinc-200 
                  border border-indigo-100 dark:border-zinc-700
                  shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <FiWifi className="text-indigo-500" />
                  {item}
                </span>
              ))}
          </div>
        </div>

        {/* BUTTON */}
      <Link href={`/room/${_id}`}>
        <button className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300">
          View Details
        </button>
      </Link>

      </div>
    </div>
  );
};

export default RoomCard;