import React from 'react'

const Card = ({brands}) => {
  return (
    <div className='grid grid-cols-4'>
    {
        brands.map((brand, index) =>{
          return (
            <div key={index} className='border rounded-lg m-3 p-2 flex items-center'>
              <div className='font-semibold text-base text-center'>{brand.text}</div>
                </div>
          )
        })
    }
 </div>
  )
}

export default Card