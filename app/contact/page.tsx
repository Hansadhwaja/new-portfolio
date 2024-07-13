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
          <form
            className='w-full flex flex-col gap-4 mt-10'>
            <label className='text-black-500 font-semibold'>Name</label>
            <input
              type='text'
              name='name'
              className='input p-3 rounded-lg text-black'
              placeholder='John'
              required
            />

            <label className='text-black-500 font-semibold'>Email</label>
            <input
              type='email'
              name='email'
              className='input p-3 rounded-lg text-black'
              placeholder='John@email.com'
              required />

            <label className='text-black-500 font-semibold'>Your Message</label>
            <textarea
              name='message'
              rows={4}
              className='textarea p-3 rounded-lg text-black'
              placeholder='Let me know how can I help you!'
              required />
            <button
              type='submit'
              className='btn p-3 bg-blue-500 rounded-xl hover:bg-blue-600'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default page