
'use client'
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/utils/cn";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/moving-border";
import Link from "next/link";

const Hero = () => {
    const words = ["Web Devloper", "UI/UX Designer", "MERN Stack"];
    return (
        <div className=" h-screen relative w-full overflow-hidden bg-slate-900 flex-center flex-col rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-1 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
            <h1 className={cn(" lg:text-7xl md:text-5xl text-2xl font-bold text-white relative z-20")}>
                Transforming Concepts into <br /> Seamless
                <span className="bg_gradient_r"> User Experiences</span>
            </h1>
            <div className="text-center text-sm sm:text-xl font-semibold mt-3 lg:mt-14 text-neutral-300 relative z-20 flex flex-wrap">
                <span>Hi, I am Hansadhwaja. <FlipWords words={words} className="text-white text-2xl" /> based in India, <br />specializing in building MERN stack applications.</span>

            </div>
            <div className="mt-10">
            <Link href={'/about'}>
                <Button
                    borderRadius="1.75rem"
                    className="bg-slate-900 text-white border-slate-800"
                >
                    Who I am
                </Button>
            </Link>
            </div>
        </div>
    )
}

export default Hero