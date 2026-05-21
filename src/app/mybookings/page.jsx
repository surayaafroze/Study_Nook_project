import Image from 'next/image';
import React from 'react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import {
  FiMail,
  FiUser,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
} from 'react-icons/fi';

const MyBookings = async () => {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(
    `http://localhost:5000/bookings/${user?.id}`,
    { cache: 'no-store' }
  );

  const bookings = await res.json();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 py-12">

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDE - BOOKINGS */}
        <div className="flex-1">

          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-8">
            My Bookings
          </h1>

          {bookings.length === 0 ? (
            <p className="text-slate-500">No bookings found</p>
          ) : (

            <div className="space-y-6">

              {bookings.map((b) => (

                <div
                  key={b._id}
                  className="flex flex-col md:flex-row bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-zinc-800"
                >

                  {/* IMAGE */}
                  <div className="relative w-full md:w-64 h-56">
                    <Image
                      src={b.image}
                      alt={b.roomName}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex-1 space-y-3">

                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                      {b.roomName}
                    </h2>

                    <p className="text-sm text-slate-500">
                      {b.description?.slice(0, 120)}...
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">

                      <div className="flex items-center gap-2">
                        <FiMapPin />
                        {b.floor}
                      </div>

                      <div className="flex items-center gap-2">
                        <FiUsers />
                        {b.capacity} People
                      </div>

                      <div className="flex items-center gap-2">
                        <FiClock />
                        ${b.hourlyRate}/hr
                      </div>

                    </div>

                    <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-semibold">
                      Confirmed
                    </span>

                  </div>
                </div>

              ))}
            </div>
          )}
        </div>

        {/* RIGHT SIDE - USER INFO */}
        <div className="w-full lg:w-80">

          <div className="sticky top-10 bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-zinc-800">

            <div className="flex flex-col items-center text-center">

              <img
                src={user?.image}
                alt={user?.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
              />

              <h2 className="mt-4 text-xl font-bold text-slate-800 dark:text-white">
                {user?.name}
              </h2>

              <p className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                <FiMail />
                {user?.email}
              </p>

            </div>

            <div className="mt-6 space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-slate-500">Total Bookings</span>
                <span className="font-bold text-indigo-600">
                  {bookings.length}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Active</span>
                <span className="font-bold text-green-600">
                  {bookings.filter(b => b.status !== 'cancelled').length}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Cancelled</span>
                <span className="font-bold text-red-500">
                  {bookings.filter(b => b.status === 'cancelled').length}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default MyBookings;