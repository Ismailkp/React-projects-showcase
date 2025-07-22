import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utility/AppSlice'
import { Link } from 'react-router-dom'
import { Youtube_Videos_Api } from '../Utility/Constants'


export const Head = () => {
  let[seachquary,setSeachquery]=useState('')
  let[autosuggestions,setAutosuggestions]=useState([])
  // console.log(seachquary)
    let dispatch=useDispatch()

    const toggleMenuHandler=()=>{
     dispatch( toggleMenu())
    }

    // search Functionality
 useEffect(() => {
   
 let timer=setTimeout(()=>searchFuncationality(),200);
   return () => 
   clearTimeout(timer)
   
 }, [seachquary])
 
    let searchFuncationality=async()=>{
      // console.log(`api call ${seachquary}`)
   
      let data=await fetch(Youtube_Videos_Api + seachquary)
      let json= await data.json()
    
        // setAutosuggestions(json[1])
   
    
    }
  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-sm border-red-600'>
        <div className='flex col-span-1 mx-2'>
            <img className='h-16 w- cursor-pointer'
            onClick={()=>toggleMenuHandler()}
            alt='Menu' src='https://www.svgrepo.com/show/312300/hamburger-menu.svg'/>
            
             <img className='h-16'
             alt='youtube-logo'  src='https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png'/>
    
        </div>
        <div className='col-span-10 '>
          <div>
            <input  className='py-3 w-2/3 border border-gray-700 rounded-l-full text-center'
            type='text'
            placeholder='Please seach'
            value={seachquary}
            onChange={(e)=>setSeachquery(e.target.value)}
            />

            <button className=' py-3 border border-gray-700 rounded-r-full px-5 py2 bg-gray-400' >🔍</button>
          </div>
        <div className='py-2 fixed w-1/2 p-2 bg-slate-200 rounded-3xl'>
        <ul>
         {autosuggestions.map((s)=>(
          <li key={s} >{s}</li>
         ))}
        </ul>
        </div>
           </div>
        <div className='col-span-1 p-1'>
            <img  className='h-10'
            src="https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg" alt="User-logo" />
        </div>

    </div>
  )
}
