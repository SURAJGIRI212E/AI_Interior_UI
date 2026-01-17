import { ImageDown, RotateCcw, Sparkles, WandSparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ImageActions = () => {
  return (
    <div className='flex items-center gap-4 my-10'>
      <div className='flex gap-2 bg-amber-600 px-8 py-3 rounded-lg shadow-md text-white font-semibold text-sm justify-center items-center cursor-pointer hover:bg-amber-700 w-1/2'>
        <span><ImageDown size={16}/></span>
        <span>Download Image</span>
      </div>
      {/* it can be go to analyis page or just regenerate image in this page itself  */}
      <div className='flex gap-2  border-amber-200 border px-8 py-3 rounded-lg shadow-md  font-semibold text-sm justify-center items-center cursor-pointer hover:bg-amber-50 w-1/3'>
        <span><RotateCcw size={16}/></span>
        <span>Regenarate </span>
      </div>
      <Link href={'/'} className='flex gap-2  border-amber-200 border px-8 py-3 rounded-lg shadow-md  font-semibold text-sm justify-center items-center cursor-pointer hover:bg-amber-50 w-1/3' >
        <span><Sparkles size={16}/></span>
        <span>New design</span>
      </Link>
    </div>
  )
}

export default ImageActions