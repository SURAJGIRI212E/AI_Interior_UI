import { Lightbulb, TrendingUp, Zap } from 'lucide-react'
import React from 'react'

const Features = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-8'>
            <div className=' space-y-4 border-zinc-300 border rounded-xl p-6 '>
                <div className='bg-amber-100 w-fit p-2 rounded-lg text-amber-800'><Lightbulb size={28}/></div>
                <h1 className='text-lg font-semibold'>Smart Analysis</h1>
                <p className='text-zinc-500 text-sm'>Our AI analyzes your space and identifies opportunities for improvement in lighting, layout, and decor.</p>
            </div>
             <div className='space-y-4 border-zinc-300 border rounded-xl p-6  '>
                <div className='bg-green-100 w-fit p-2 rounded-lg text-green-800'><Zap size={28}/></div>
                <h1 className='text-lg font-semibold'>Instant Results</h1>
                <p className='text-zinc-500 text-sm'>Get personalized suggestions in seconds. Select the ones you like and generate your new design instantly.</p>
            </div>
             <div className='space-y-4 border-zinc-300 border rounded-xl p-6 '>
                <div className='bg-blue-100 w-fit p-2 rounded-lg text-blue-800'><TrendingUp size={28}/></div>
                <h1 className='text-lg font-semibold'>Professional Quality</h1>
                <p className='text-zinc-500 text-sm'>Receive design recommendations based on professional interior design principles and current trends.</p>
            </div>
            
        </div>
  )
}

export default Features