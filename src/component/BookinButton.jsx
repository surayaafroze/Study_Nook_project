'use client';

import { authClient } from '@/lib/auth-client';
import React from 'react';

const BookinButton = ({ room }) => {

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const {
    _id,
    roomName,
    description,
    image,
    amenities,
    capacity,
    floor,
    hourlyRate
  } = room || {};

  const handlebooking = async () => {

    if (!user) {
      alert("Please login first");
      return;
    }

    const bookingData = {
      userId: user.id,
      userImage: user.image,
      userName: user.name,
      userEmail: user.email,

      bookingId: _id,
      roomName,
      description,
      image,
      amenities,
      capacity,
      floor,
      hourlyRate,
    };

    console.log(bookingData);

    const res = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();

    console.log(data);

    if (data.insertedId) {
      alert("Booking Successful");
    }
  };

  return (
    <div>
      <button
        onClick={handlebooking}
        className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg shadow-md transition"
      >
        Book This Room
      </button>
    </div>
  );
};

export default BookinButton;