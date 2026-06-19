import React,{useContext} from 'react'
import UserContext from '../../context/UserContext'
function Profile() {
    const {user} =useContext(UserContext)
    if (!user) return <p className='bg-gray '> please login ababu bhaiya</p>
  return (
    <div>Welcome {user.userName}</div>
  )
}

export default Profile