import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section>
      <h1>Emily Mackay</h1>
      <h3>Front-End Developer</h3>
      <Image
        src='/images/hero-default-solid.png'
        objectFit='cover'
        fill={true}
        className='w-full h-full object-cover rotate-180'
      />
    </section>
  )
}

export default Hero