import ContactUsPreview from '@/components/ContactUsPreview'
import { Button } from '@/components/ui/moving-border'
import { Spotlight } from '@/components/ui/Spotlight'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import { skills } from '@/constants'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col max-container'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className='mt-40'>
     
        <h1 className='lg:text-6xl md:text-4xl text-2xl'>Hello, I am  <span className='bg-clip-text text-transparent bg-gradient-to-r font-bold from-cyan-500 to-blue-500'>Hansadhwaja</span></h1>
        <p className='mt-5'>4th year,Computer Engineering persuing B.Tech from IIIT,Bhubaneshwar.</p>
      </div>
      <div className='mt-10 w-full'>
        <h2 className='text-2xl font-semibold text-start'>My Skills</h2>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className='block-container w-20 h-20'>
                <div className='btn-back bg-white rounded-xl' />
                <div className='btn-front rounded-xl flex-center'>
                  <Image
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
              <div>
                <p className='text-slate-300 font-semibold text-center mt-2'>{skill.name}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
      <ContactUsPreview />
    </div>
  )
}

export default page