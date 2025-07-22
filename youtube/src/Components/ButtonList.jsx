import React from 'react'
import { Buttons } from './Buttons'


export const ButtonList = () => {
  return (
    <div className='flex'>
   <Buttons name='All'/>
   <Buttons name="Music"/>
   <Buttons name="Songs"/>
   <Buttons name="Hindi"/>
   <Buttons name="Kannda"/>
   <Buttons name="English"/>
   <Buttons name="Melody"/>
   <Buttons name="Cricket"/>
    </div>
  )
}
