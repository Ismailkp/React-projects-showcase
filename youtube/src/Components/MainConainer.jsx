import React from 'react'
import { ButtonList } from './ButtonList'
import { VideoCotainer } from './VideoCotainer'

export const MainConainer = () => {
  return (
    <div className='w-full'>
        <ButtonList/>
        <VideoCotainer/>
    </div>
  )
}
