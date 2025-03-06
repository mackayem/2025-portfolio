import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='max-width-100'>
      <div className='flex flex-col items-center m-30'>
        <h1 className='text-6xl m-5'>Emily Mackay</h1>
        <h3 className='text-2xl m-5'>Front-End Developer</h3>
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