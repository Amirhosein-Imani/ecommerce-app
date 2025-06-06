import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products , currency , addToCart} = useContext(ShopContext);
  const [productData , setProductData] = useState(false);
  const [image , setImage] = useState('');
  const [size , setSize] = useState('');

  const fetchProductData = async () => {

    products.map((item) => {

      if (item._id === productId) {

        setProductData(item);
        setImage(item.image[0]);
        return null
        
      }

    })

  }

  useEffect(() => {

    fetchProductData();

  } , [productId , products])

  return productData ? (

    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/* ---------- product Data ---------- */}

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* ---------- product images ---------- */}

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
            
              productData.image.map((item , index) => (

                <img onClick={() => setImage(item)} src={item} alt="Product Image" key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />

              ))
          
            }
          </div>

          <div className='w-full sm:w-[80%]'>

            <img src={image} alt="Product Image" className='w-full h-auto' />

          </div>

        </div>

        {/* ---------- product info ---------- */}

        <div className='flex-1'>

            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

            <div className='flex items-center gap-1 mt-2'>

              <img src={assets.star_icon} alt="Star Icon" className='w-3.5' />
              <img src={assets.star_icon} alt="Star Icon" className='w-3.5' />
              <img src={assets.star_icon} alt="Star Icon" className='w-3.5' />
              <img src={assets.star_icon} alt="Star Icon" className='w-3.5' />
              <img src={assets.star_dull_icon} alt="Star Dull Icon" className='w-3.5' />
              <p className='pl-2'>(125)</p>

            </div>

            <p className='mt-5 text-3xl font-medium '>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

            <div className='flex flex-col gap-4 my-8'>

              <p>Select Size</p>

              <div className='flex gap-2'>
                {
              
                  productData.sizes.map((item , index) => (<button onClick={() => setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}>{item}</button>))
                
                }
              </div>

            </div>

            <button onClick={() => addToCart(productData._id , size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>

            <hr className='mt-8 sm:w-4/5' />

            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>

                <p>100% original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return & exchange policy within 7 days.</p>

            </div>

        </div>

      </div>

      {/* ---------- description & review section ---------- */}

      <div className='mt-20'>

                <div className='flex'>

                  <b className='border px-5 py-3 text-sm'>Description</b>
                  <p className='border px-5 py-3 text-sm'>Reviews (125)</p>

                </div>

                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eaque exercitationem esse dolorem quisquam inventore nesciunt aliquid quae necessitatibus, earum repellendus quidem fugiat eum error. Ea dolor iste est mollitia, maxime cumque facere, maiores ab minus, rerum architecto officiis incidunt qui assumenda odio ducimus eius id harum quasi porro tempora eligendi temporibus? Quis totam reiciendis, porro ullam aliquid, optio sint facilis repudiandae consectetur veritatis magni assumenda consequuntur nisi est, doloremque perspiciatis! Neque eos quo, laudantium obcaecati veritatis sint exercitationem expedita sit necessitatibus officiis amet sunt modi maxime aperiam tenetur culpa totam praesentium ipsa blanditiis non ex! Voluptatum totam pariatur rerum.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quod. Quod, fugiat debitis illum ad qui nesciunt temporibus dolores fuga magnam delectus, cumque minima? Laudantium nemo aliquid velit officia perspiciatis, in natus dolor, praesentium impedit placeat quas cumque temporibus error culpa repudiandae incidunt aliquam odit sapiente architecto pariatur? Expedita, ipsa rerum! Officiis maxime, similique sint eligendi voluptatum error animi corporis quidem. Odit voluptatum incidunt, qui ipsam provident harum quidem architecto a impedit, quo obcaecati mollitia!</p>

                </div>

      </div>

      {/* ---------- display related products ---------- */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>

  ) : <div className='opacity-0'></div>

}

export default Product