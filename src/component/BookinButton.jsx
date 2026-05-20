'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';

const BookinButton = () => {
   const { data: session } = authClient.useSession();
const user = session?.user;
  console.log(user)

// const handlebooking =async () =>{
// const bookingData = {
  
// }
// }

  return (
    <div>
        <button className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg shadow-md transition">
                   Book This Room
                 </button>
    </div>
  );
};

export default BookinButton;