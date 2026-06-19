import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams() 
  return (
    <div className="bg-cyan-800 text-orange-500">User:{id}</div>
  )
}

export default User