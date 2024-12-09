import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OpenPopup } from '../utils/cartSlice';
const CustomiseMenu = () => {
  const cart = useSelector((state) => state?.cart?.cartInfo);
  const dispatch = useDispatch();
  const selected = cart[cart.length - 1];
  const groups = selected?.variantsV2?.variantGroups || selected?.variants?.variantGroups
  const addOns = selected?.addons
  const [currentStep, setCurrentStep] = useState(0);
  const goToNext = ()=>{
    if(currentStep < groups.length - 1){
      setCurrentStep(currentStep + 1)
    }
  }
  const goToPrevious = ()=>{
    if(currentStep> 0 ){
      setCurrentStep(currentStep - 1)
    }
  }
  const closePopup = () => {
    dispatch(OpenPopup())
    document.body.classList.add('overflow-visible')
  }
  return (
   <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
       
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
          <div className="bg-gray-100 px-3 pb-3 pt-3 sm:p-3 sm:pb-3">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <button onClick={closePopup} className=''>Close</button>
                <h3 className="text-lg font-bold text-gray-900" id="modal-title">Customise as per your taste
                </h3>
                {
                groups &&  groups.map((group,index) => {
                    const {name, variations} = group
                    return(
                      <>
                    <div className='font-bold text-base my-4 border-t-2 pt-4'>{name}</div>
                      <div key={index} className='bg-white rounded-xl p-3'>
                   { variations.map((v,i)=>{
                   return( <div key={i} className='flex justify-between w-full mb-2'>
                     <div className='flex gap-4'> 
                     { v.isVeg ? <img className="w-5 h-5" src="../veg.png" alt={v.name} /> :
                     <img className="w-5 h-5" src="../nonVeg.png" alt={v.name} /> 
                     }
                      {v.name} </div>
                      <input className="checked:border-indigo-500 w-4" type="radio" name={name} />
                    </div> )
                    }) }    
                </div>
                  </>
                  )
                   
                  })
                }
                {
                 addOns &&  addOns.map((item,index) => {
                    const {groupName, choices} = item
                    return(
                      <div key={index}>
                    <div className='font-bold text-base my-4 border-t-2 pt-4'>{groupName}</div>
                      <div className='bg-white rounded-xl p-3'>
                   { choices.map((v,i)=>{
                   return( <div key={i} className='flex justify-between w-full mb-2'>
                      <div className='flex gap-4'> 
                     { v.isVeg ? <img className="w-5 h-5" src="../veg.png" alt={v.name} /> :
                     <img className="w-5 h-5" src="../nonVeg.png" alt={v.name} /> 
                     }
                      {v.name} </div>
                      <div className='flex gap-4'>
                      <div>+₹{v.price/100}</div>
                      <input className="checked:border-indigo-500 w-4" type="checkbox" />
                      </div>
                    </div> )
                    }) }    
                </div>
                  </div>
                  )
                   
                  })
                }
              </div>
            
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button onClick={goToNext}
            type="button" 
            className="inline-flex w-full justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 sm:ml-3 sm:w-1/2">Continue</button>
          </div>
        </div>
      </div>
    </div>
  </div> 
  
  )
}

export default CustomiseMenu