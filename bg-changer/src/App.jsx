import { useState } from 'react'

import './App.css'
import Card from './card/Card'

function App() {

  const [color,setcolor]=useState("olive")

  return (
  <div  className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className=' fixed flex flex-wrap justify-center bottom-12 rounded-lg '>
        <div className="flex flex-wrap gap-3 px-3 py-3 bg-slate-100">
          <button  onClick={()=>setcolor("red")} className='outline-none ' style={{ backgroundColor:"red"}}> red</button>
          <button className='outline-none ' style={{ backgroundColor:"yellow"}}> yellow</button>
          <button className='outline-none ' style={{ backgroundColor:"green"}}> green</button>
          <button className='outline-none ' style={{ backgroundColor:"blue"}}> blue</button> 
          
        </div>
          </div>





          <Card/>
          
      


    </div>
     
    
  )
}

export default App
