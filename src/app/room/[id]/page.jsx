import React from 'react';

const RoomDetailsPage =async ({params}) => {
  const{id}=await params
  const res = await fetch(`http://localhost:5000/room/${id}`)
  const rooms =await res.json()
  console.log(rooms)
  return (
    <div>
     RoomDetailsPage
    </div>
  );
};

export default RoomDetailsPage;