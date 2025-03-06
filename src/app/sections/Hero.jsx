"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {
  return (
    <section className='max-width-100'>
      <div className='flex flex-col items-center mt-20 lg:m-20'>
        <h1 className='text-4xl md:text-6xl m-5'>Emily Mackay</h1>
        <h3 className='text-xl md:text-2xl m-5 opacity-75'>Front-End Developer</h3>
        <div className="opacity-30 text-md md:text-lg mt-10 italic">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              '',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'in development',
              1000,
              'in development ...',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
      </div>
      <Image
        src='/images/hero-default-solid.png'
        objectFit='cover'
        fill={true}
        className='w-full h-full object-cover rotate-180'
        alt='mountain range with snow'
      />
    </section>
  )
}

export default Hero