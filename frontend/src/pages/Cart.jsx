import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useEffect } from 'react';
import Title from '../components/Title'
import { assets } from '../assets/assets';

const Cart = () => {

  const { products , currency , cartItems } = useContext(ShopContext);

  const [cartData , setCartData] = useState([]);

  useEffect(() => {

    const tempData = [];

    for (const items in cartItems) {
      
      for (const item in cartItems[items]) {
        
        if (cartItems[items][item] > 0) {
          
          tempData.push({

            _id : items , 
            size : item ,
            quantity : cartItems[items][item]

          })

        }

      }
      
    }

    setCartData(tempData);

  } , [cartItems])

  return (
    
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3'>

        <Title text1={'YOUR'} text2={'CART'}/>

      </div>

      <div>{
      
        cartData.map((item , index) => {

          const productData = products.find((product) => product._id === item._id);

          return (

            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col sm:flex-row items-center gap-4'>

              <div className='flex items-start gap-6 sm:w-[40%] flex-shrink-0'>

                <img src={productData.image[0]} alt="Cart Product Image" className='w-16 sm:w-20' />

                <div>

                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>

                  <div className='flex items-center gap-5 mt-2'>

                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>

                  </div>

                </div>

              </div>

              <div className='sm:w-[20%]'>

                <input type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />

              </div>
              
              <div className='sm:w-[20%]'>

                <img src={assets.bin_icon} alt="Bin Icon" className='w-4 mr-4 sm:w-5 cursor-pointer' />

              </div>
              
            </div>

          )

        })
        
      }</div>

    </div>

  )

}

export default Cart