import React from 'react'
import ResturantMenuAccorion from './ResturantMenuAccorion';
import ResturantTopPick from './ResturantTopPick';
const ResturantMenu = ({menuInfo}) => {
  return (
    <div>
      {
        menuInfo  && menuInfo.map((item,index)=>{
            return (
              <div key={index}>
               {
                item?.card?.card?.title !== 'Top Picks' &&  item?.card?.card?.title !== undefined && <ResturantMenuAccorion items={item?.card?.card} />
               }
               {
                 item?.card?.card?.title === 'Top Picks' &&  item?.card?.card?.title !== undefined && <ResturantTopPick  items={item?.card?.card?.carousel}  />
               } 
                </div>
            )
        })
      }
    </div>
  )
}

export default ResturantMenu