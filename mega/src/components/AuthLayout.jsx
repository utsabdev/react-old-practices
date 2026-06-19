import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import{useNavigate} from'react-router-dom'

//The Protected component is a wrapper component that controls access to certain routes based on user authentication status.//Think of it as a gatekeeper:

// Only allows authenticated users to access some pages

// Redirects others to login or home page based on whether they should be logged in or not.
//authentication tru e vane login vayeko user haru lai matra access dinxa ani false vaena vane login nagareka user haru lai matra access dinxa
export default function Protected({
    children,authentication = true
}) {
    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state =>state.auth.status)
//useffect use hunxa kati kehra vanda  dat feth garnu parxa redirect garnu parxa  event lsiten agrnu parda 
    useEffect(()=>{
        // basically authsatus ko value fasle aayo vane login page ma janxa ani true aayo vane home page ma janxa
        if(authentication && authStatus !== authentication){
            navigate("/login")

        } else if(!authentication && authStatus !== authentication){
            navigate('/')
        }
        setLoader(false)
    },[authStatus,navigate,authentication])

  return loader ? <h1>Loading...</h1>:<>{children}</>
}

// jsx ma jaile ni pure hunu parxa jsto input test outputPure function rule: Given the same loader + children + authentication + authStatus, it always returns the same JSX

// It doesn’t perform any side effects (like navigate()) directly in the render → pure ✅