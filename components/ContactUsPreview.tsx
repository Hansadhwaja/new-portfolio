import React from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import { Button } from './ui/moving-border'
import Link from 'next/link';

const ContactUsPreview = () => {
    const words = [
        {
            text: "Having",
        },
        {
            text: "something",
        },
        {
            text: "in",
        },
        {
            text: "mind.",
        },
        {
            text: "Let's",
        },
        {
            text: "tackle",
        },
        {
            text: "it",
        },
        {
            text: "Together",
            className: "text-blue-500 dark:text-blue-500 sm:text-2xl",
        }
    ];
    return (
        <div className='bg-slate-900 p-4 rounded-lg mt-10'>
            <TypewriterEffectSmooth words={words} />
            <Link href={'/contact'}>
                <Button
                    borderRadius="1.75rem"
                    className="bg-slate-900 text-white border-slate-800"
                >
                    Contact Us
                </Button>
            </Link>
        </div>
    )
}

export default ContactUsPreview