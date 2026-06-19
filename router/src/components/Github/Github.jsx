import React, { useEffect, useState } from 'react'

function Github() {
    const[ data, setData]= useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/jrTilak').then(response=> response.json()).then(data=>{
            console.log(data);
            setData(data)
        })
    })
  return (
    <div className=" text-center m-6 bg-lime-700 text-yellow-800 p-7 text-5xl"> Github Followers :{data.followers}
    <img src={data.avatar_url} alt = "Git picture" width={300}/></div>
  )
}

export default Github