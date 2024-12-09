import React from 'react'
import Card from './Card'
const BestPlace = ({bestPlace}) => {
    const title = bestPlace.title
    const brands =  bestPlace.brands
  return (
    <>
     <div className='font-bold text-xl'>{title}</div>
      <Card brands={brands} />
    </>
   
  )
}

export default BestPlace