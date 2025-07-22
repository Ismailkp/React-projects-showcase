import React from 'react'
import { useDispatch } from 'react-redux'
import { CloseMenu } from '../Utility/AppSlice'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export const WatchPage = () => {

  let[useParams]=useSearchParams('v')
  console.log(useParams.get('v'))

  let dispatch=useDispatch()
  useEffect(() => {
   dispatch(CloseMenu())
  }, [])
  
  return (
    <div>
      <iframe width="1000" height="500"
       src={"https://www.youtube.com/embed/" + useParams.get('v')} 
       title="YouTube video player" 
       frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin" allowfullScreen>
      </iframe></div>
  )
}
