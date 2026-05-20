
import DetailsPage from '@/component/DetailsPage';
// import { authClient } from '@/lib/auth-client';

import React from 'react';

const RoomDetailsPage =async ({params}) => {

  const{id}=await params
  const res = await fetch(`http://localhost:5000/room/${id}`)
  const room =await res.json()
  console.log(room)
  return (
    <div>
   <DetailsPage room={room}></DetailsPage>
    </div>
  );
};

export default RoomDetailsPage;