import ContactForm from '@/components/ContactForm'
import { Meteors } from '@/components/ui/meteors'
import React from 'react'

const page = () => {

  return (
    <div className='relative flex-center flex-col min-h-screen overflow-hidden bg-black'>
      <Meteors number={20} />
      <div className='mt-32'>
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold'>Get In <span className='bg_gradient_r'>Touch</span></h1>
      </div>
      <section className='w-full px-4 md:px-16 lg:w-1/2'>
        <div className='flex-1 flex flex-col'>
         <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default page