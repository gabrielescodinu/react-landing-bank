import React from 'react'

import { title } from '../constants'
import { robot } from '../assets'



const Hero = () => {
  return (
    <div className='min-h-[calc(100vh-108px)] flex flex-col justify-center'>
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
            <div className='p-8 lg:pl-20 4xl:pl-40'>
                <p className='text-white text-4xl lg:text-7xl font-bold'>The Next <br /><span className='text-gradient'>Generation</span><br /> Payment Methods</p>
                <p className='mt-16 text-gray-300 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt tempora nam eveniet magni! Rem delectus, sit et repudiandae tempora, provident libero minus qui inventore quam pariatur aliquid autem ex iste?</p>
            </div>
            <div>
                <img src={robot} className='w-full object-contain' alt="" />
                <div className='absolute top-0 h-96 w-1/5 z-0 pink__gradient'></div>
                <div className='absolute top-0 h-52 w-2/5 z-0 white__gradient'></div>
                <div className='absolute top-0 h-96 w-2/5 z-0 blue__gradient'></div>
            </div>

        </div>
    </div>
  )
}

export default Hero