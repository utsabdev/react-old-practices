import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App()
{
  
  const [length,setLength]=useState(8)
  const [numbers,setNumbers]=useState(false);
  const [characters,setCharcters]=useState(false);
  const [password,setPassword]=useState("")
  //use ref
  const passwordRef =useRef(null)
  const passwordGenerator = useCallback(
    ()=>
  {
    let pass=""
    let str="ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers) str=str+ "0123456789"
    if(characters) str+="[{@#$%&"
    for (let i = 1; i < length; i++)
    {
      let char = Math.floor(Math.random()*str.length + 1)
      pass +=str.charAt(char)
      
1     
    }
    setPassword(pass)

  },[length,numbers,characters,setPassword])
  const copyPasswordtoClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length, numbers,characters,passwordGenerator])
 return (
    <>
    <div className='w-full max-w-screen-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 content-center bg-center items-center ' >
      <h1 className='text-white text-center  '> Password Generator</h1>
      <div className=" flex shadow rounded-lg overflow-hidden mb-4">
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3 '
        placeholder="password"
        readOnly
        ref={passwordRef}/>
        <button 
        onClick={copyPasswordtoClipboard}
        className='outline-none bg-blue-400 text-white px-3 py-0.5 '> copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center'>
          <input type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}/>
          <label> length:{length}</label>
         
        </div>
        
        <div className='flex items-center'>
          <input type="checkbox" 
          defaultChecked={characters}
          id="characterInput"
          onChange={()=>{
            setCharcters((prev)=>!prev);
          }}/>
          
         
         
          <label> characters</label>
         
        </div>
        <div className='flex items-center'>
          <input type="checkbox" 
          defaultChecked={numbers}
          id="numberInput"
          onChange={()=>{
            setNumbers((prev)=>!prev);
          }}/>
          
         
         
          <label> numbers</label>
         
        </div>
      </div>
    </div>
    </>
  )
}

export default App
