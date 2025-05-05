import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

  return (

    <div>

        <div className='flex flex-col sm:flex-row gap-14 my-10 mt-40 text-sm'>

            <div className='sm:w-3/5'>

                <p className='text-xl font-medium mb-5'>Amirhosein Imani</p>
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nemo. Suscipit minus quaerat iste, qui numquam adipisci quae inventore quia, est molestiae accusantium ex sit! Voluptate similique architecto molestiae adipisci.
                Impedit, quibusdam, veritatis autem illum architecto fugit nulla porro, error dolorem voluptatum iste tempore praesentium ab. Natus deserunt dicta, dolor corporis, consequuntur voluptate voluptatum similique quod tempora optio sit numquam?
                Facilis nesciunt cum facere tempore tempora quaerat. Magni, dolorum impedit facilis ipsam in placeat molestiae tempore consequatur architecto illo sapiente, vitae natus quasi reiciendis itaque illum, vel nesciunt perspiciatis earum?</p>

            </div>

            <div className='sm:w-1/5'>

                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>

                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>

                </ul>

            </div>

            <div className='sm:w-1/5'>

                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>

                    <li>+xx-xxx-xxx-xxxx</li>
                    <li>imaniamirhosein2001@gmail.com</li>

                </ul>

            </div>

        </div>

        <div>

            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ AmirhoseinImani - All Right Reserved.</p>

        </div>

    </div>

  )
}

export default Footer
