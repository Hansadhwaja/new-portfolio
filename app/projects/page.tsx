'use client'
import ContactUsPreview from '@/components/ContactUsPreview'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { projects } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='max-container'>
      <div className='mt-12'>
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold'>My <span className='bg_gradient_r'>Projects</span></h1>
        <p className='mt-5'>I have embarked on numerous projects throughout the years,
          but these are the ones I hold closest to my heart.
          Many of them are open-source,so if you come across
          something that piques your intrest, feel free to
          explore the codebase and contribute your ideas for
          further enhancements. Your collaboration is highly valued.
        </p>
      </div>
      <TracingBeam>
        <div className='flex flex-wrap mt-10'>
          {projects.map((project) => (
            <CardContainer className="inter-var" key={project.name}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.imgUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
                <div className="flex-center mt-20 text-indigo-500 font-semibold">
                  <Link
                    href={project.link}
                  >
                    Live Link →
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </TracingBeam>
     <ContactUsPreview />
    </div>
  )
}

export default page