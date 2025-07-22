import React from 'react'
import { useSelector } from 'react-redux'
import store from '../Utility/Store'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
   const ismenuOpen=useSelector(store=>store.app.isMenuOpen)
   if(!ismenuOpen) return null;
  return (
    <div className='px-7 py-2 shadow-sm col-span-2 w-48'>
        <ul>
        <li> <Link to={'/'}>Home</Link></li>
        <li>Shorts</li>
        <li>Treanding</li>
        <li>Movies</li>

      </ul>
      <h1 className='font-bold pt-5'>Subscripations</h1>
      <ul>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
        <li>Movies</li>

      </ul>
      <h1 className='font-bold pt-5'>Watch</h1>
      <ul>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
        <li>Movies</li>

      </ul>
    </div>
  )
}
