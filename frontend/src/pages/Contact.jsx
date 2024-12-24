import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {

  return (

    <div>

      <div className='text-center text-2xl border-t pt-10'>

        <Title text1={'CONTACT'} text2={'US'}/>

      </div>

      <div className='flex flex-col my-10 justify-center md:flex-row gap-10 mb-28'>

        <img src={assets.contact_img} alt="Contact Image" className='w-full md:max-w-[480px]' />

        <div className='flex flex-col justify-center items-start gap-6'>

          <p className='text-xl font-semibold text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Address : XXXXXXXXXX <br /> XXXXXXXX XXXXXXXX</p>
          <p className='text-gray-500'>Tel : (+XXX) XXX-XXX <br /> Email : imaniamirhosein2001@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Work With Amirhosein Imani</p>
          <p className='text-gray-500'>Learn More About Me & My Works</p>

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore My Works</button>

        </div>

      </div>

      <NewsLetterBox />

    </div>

  )
}

export default Contact