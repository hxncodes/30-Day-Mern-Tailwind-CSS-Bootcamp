import { useParams } from "react-router-dom";

import React from 'react'

function UserDetail() {
    const {id}= useParams();


  return (
    <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">User Detail</h2>
        <p className="text-lg">User ID: {id}</p>
    </div>
  )
}

export default UserDetail