'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import before from '../before.jpg'
import after from '../after.jpg'
import { MoveHorizontal } from 'lucide-react'
import { useSearchParams } from 'next/navigation';

const BeforeAndAfterSlider =  () => {
  const searchParams = useSearchParams()
  const imageUrl = searchParams.get('image');
  const [sliderPos, setSliderPos] = useState(50);
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden select-none">
      
      {/* 1. THE "BEFORE" IMAGE (Base Layer - Left Side) */}
      <Image src={imageUrl} alt="Before" fill loading='eager' className="object-cover" priority />
      {/* Label: Before (Fades out when slider moves left) */}
      <div className="absolute top-4 left-4 z-10 bg-zinc-700 text-white text-md font-semibold px-3 py-1 rounded-full transition-opacity duration-500"
        style={{ opacity: sliderPos < 10 ? 0 : 1 }}>
        Before
      </div>

      {/* 2. THE "AFTER" IMAGE (Top Layer - Pinned to Right) */}
      <div className="absolute inset-y-0 w-full h-full right-0 overflow-hidden border-l-2 border-white shadow-2xl"
        style={{ width: `${100 - sliderPos}%` }} // Width grows from right to left
          >
        {/*  using a wrapper that is always 100% width of the main container 
            to prevent the image from "shrinking" or moving. */}
        <div className="h-full w-[100cqw] right-0 absolute">
           <Image src={after} alt="After" fill className="object-cover"/>

          {/* Label: After (Fades out when slider moves right) */}
          <div className="absolute top-4 right-4 z-10 bg-emerald-600 text-white text-md font-semibold px-3 py-1 rounded-full transition-opacity duration-500"
            style={{ opacity: sliderPos > 85 ? 0 : 1 }}>
            After
          </div>
        </div>
      </div>

      {/* 3. THE INTERACTIVE SLIDER (Invisible) */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 opacity-0 cursor-ew-resize z-20"
      />

      {/* 4. THE VISUAL HANDLE */}
      <div className="absolute inset-y-0 w-1 bg-white pointer-events-none z-10"
        style={{ left: `${sliderPos}%` }}>
          {/* <--> */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white text-amber-600 rounded-full shadow-xl flex items-center justify-center">
          <span className="text-xl font-bold"><MoveHorizontal/></span>
        </div>
      </div>
    </div>
  );
};

export default BeforeAndAfterSlider;