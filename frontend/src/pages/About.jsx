import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {

  return (

    <div>

      <div className='text-2xl text-center border-t pt-8'>

        <Title text1={'ABOUT'} text2={'US'}/>

      </div>

      <div className='flex flex-col my-10 md:flex-row gap-16'>

        <img src={assets.about_img} alt="About Image" className='w-full md:max-w-[450px]' />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem alias, sed nihil temporibus modi architecto eos! Quibusdam ducimus atque ab, modi quas recusandae eveniet reiciendis ipsum quod, optio quam molestiae cupiditate obcaecati eos error magni iusto rerum totam dignissimos maiores reprehenderit, praesentium minus. Aperiam voluptatibus iure nostrum ipsam impedit, illo quod pariatur provident esse! Nam officia nihil commodi quia sit.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit magni saepe vel cumque voluptates neque, temporibus qui excepturi, architecto quo exercitationem aperiam blanditiis repellat dolores dolorem, quidem in voluptate dignissimos! Est officiis quibusdam, adipisci quasi porro architecto explicabo provident illum doloremque distinctio, enim officia quod quisquam? Architecto, provident iure.</p>

          <b className='text-gray-800'>Our Mission</b>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit temporibus ex perferendis praesentium enim cum perspiciatis voluptates tempore voluptate rerum ipsa, atque possimus minus ullam quisquam ut rem, veniam laudantium. Repellendus, distinctio cumque repellat deserunt, explicabo modi magnam ratione veritatis praesentium corrupti autem quidem fuga?</p>

        </div>

      </div>

      <div className='text-xl py-4'>

        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>

      <div className='flex flex-col md:flex-row text-md mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>Quality Assurance :</b>

          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta aliquid dolorem ex voluptas.</p>

        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>Conveniece :</b>

          <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non a voluptatibus ea illum, hic ut omnis.</p>

        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>Exceptional Customer Service :</b>

          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, maiores fuga? Ullam commodi fuga praesentium doloremque, exercitationem vitae.</p>

        </div>

      </div>

      <NewsLetterBox />

    </div>

  )
}

export default About