import React, { useState } from 'react'
import { Youtube_Videos_Api } from '../Utility/Constants'
import { useEffect } from 'react'
import { VideoCard } from './VideoCard'
import { Link } from 'react-router-dom'


export const VideoCotainer = () => {
const [videos,setVideos]=useState([])

  useEffect(() => {
   Getvideos()
  }, [])
  

  const Getvideos=async()=>{
   let data= await fetch(Youtube_Videos_Api)
   let json=await data.json()
    // console.log(json.items)
    setVideos(json.items)

  }
  return (
    <div className='flex flex-wrap'>
     {videos.map(video=>(
      <Link to={'/watch?v='+video.id}>
       <VideoCard  key={video.id} info={video}/>
      </Link>
     ))}
    </div>
  )
}
