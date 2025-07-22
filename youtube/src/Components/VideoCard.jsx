import React from 'react'

export const VideoCard = ({info}) => {
    console.log(info)
    const{snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 m-2 w-80' >
        <img className='rounded-2xl' src={thumbnails.medium.url} alt="thub"  />
        <ul>
            <li className='w-32'>{title}</li>
            <li>{channelTitle}</li>
            <li  className='font-bold '>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}
