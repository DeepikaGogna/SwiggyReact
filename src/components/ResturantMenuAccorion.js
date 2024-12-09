import React from 'react'
import { BASE_URL } from '../utils/constant';
import { addCart,OpenPopup } from '../utils/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const ResturantMenuAccorion = ({items}) => {
    const {title, itemCards, categories} = items
    const itemCard = itemCards ? itemCards : categories?.[0]?.itemCards
     const resturantInfo =  useSelector((state)=>state.cart.resturantInfo)
    const dispatch = useDispatch();
    const addToCart = (cart)=>{
        let detail={
          rest:resturantInfo,
          cart:cart
        }
        dispatch(addCart(detail))
    }
    const addToCustomize = (cart) =>{
      let detail={
        rest:resturantInfo,
        cart:cart
      }
      dispatch(addCart(detail))
      dispatch(OpenPopup())     
      document.body.classList.add('overflow-hidden')
    }

  return (
    <div>
         <div className='font-bold mt-6'>{title+' '}{'('+itemCard?.length+')'}</div>
        {
    itemCard && itemCard?.map((menu,index) => {
    const {name, price, description, id, imageId, isVeg, itemPriceStrikeOff, ratings, addons, variants} = menu.card.info
    return(
        <div  key={index}>
        <div className='flex justify-between pt-1 pb-1 relative '>
            <div>
            <div>
                { isVeg == 1 ? <svg aria-hidden="true" height="16" width="16"><use xlinkHref="/food/sprite-CiiAtHUR.svg#vegVeg16"></use></svg> : <svg aria-hidden="true" height="16" width="16"><use xlinkHref="/food/sprite-CiiAtHUR.svg#nonvegNonVeg16"></use></svg>}
            </div>
         <div className='text-lg font-bold text-gray-700'>{name}</div> 
        {price &&  <div className='text-base font-bold'>₹{price/100}</div> }
        {ratings?.aggregatedRating?.rating && <div className='flex text-sm mt-2 mb-2 font-bold gap-1'>
         <svg className="mt-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><rect width="14" height="14" fill="white"></rect><path d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill="#1BA672"></path></svg>
         {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})</div> }
        <div className='text-gray-600 font-semibold text-base'>{description}</div>
        </div>
        <div className='max-h-40 max-w-36 ml-16 relative'>
            <img className="w-40 h-full max-w-none rounded-xl bg-green-100" src={BASE_URL + imageId} alt=""/>
            <button onClick={(e) =>{(addons || variants?.variantGroups) ? addToCustomize(menu.card.info) : addToCart(menu.card.info)}}
            className='border shadow-md absolute -bottom-3 bg-white pt-1 pb-1 rounded-lg pl-8 pr-8 mt-2 ml-5 text-green-600 font-extrabold text-lg'>ADD</button>
            {(addons || variants?.variantGroups) && <div className='text-xs text-gray-500 text-center mt-4'>Customisable</div>}
            </div>
        </div>
        <div className='flex-grow border-t border-gray-300 mt-8 mb-3'></div>
      </div>
      
    )
 })
}
</div>
  )
}

export default ResturantMenuAccorion