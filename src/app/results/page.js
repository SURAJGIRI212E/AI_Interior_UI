import { ArrowLeft, CircleCheck } from 'lucide-react'
import Link from 'next/link'
import BeforeandAfterSlider from '@/Component/BeforeandAfterSlider'
import ImageActions from '@/Component/ImageActions'
import { Suspense } from 'react'

const Results = ({imageUrl}) => {
  return (
    <div className='my-8 mx-auto px-3 space-y-8'>
      {/* header */}
      <div className='flex items-center gap-5'>
        <Link href={`/analysis?image=${encodeURIComponent(imageUrl)}`}><ArrowLeft  size={16}/></Link>
        <div className='flex  flex-col  gap-2'>
          <div className='flex items-center gap-3'>
            <h1 className='text-3xl font-bold leading-none'>Your Transformed Space</h1>
            <span className='flex items-center gap-1.5 font-semibold text-sm text-emerald-700 bg-emerald-100 rounded-full px-3 py-1'>
              <CircleCheck size={16}/> Completed
            </span>
          </div>
          <p className='text-zinc-500'>Compare your original space with the AI-enhanced design</p>
         
        </div>
      </div>
      {/* image container */}
      <div className=' bg-amber-50/50 border-amber-300  rounded-xl my-4'>
       <Suspense fallback={
        <div className="flex items-center justify-center h-40 text-amber-600 gap-2">
            <ArrowLeft className="animate-spin"/>   
        </div>}>
        <BeforeandAfterSlider />
      </Suspense>
      
      <h1 className=' text-sm top-1 text-zinc-500 text-center m-2 '>Drag the slider to compare before and after</h1>
      </div>
      <ImageActions/>
      {/*Applied Improvements */}
     <div className='my-8'>
         <div className='flex items-center gap-4 mb-4'>
          <h1 className='text-2xl font-bold'>Applied Improvements</h1>
          <span className='text-xs font-semibold bg-zinc-200 py-1 px-2 rounded-full'>4 changes</span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='p-4 border border-zinc-200 rounded-lg space-y-2 '>
              <div className='flex justify-between items-start gap-2'>
                <h2 className='font-semibold text-base'>Add Ambient Lighting</h2>
                <span><CircleCheck size={20} className="text-emerald-600" /></span>
              </div>
              <p className='p-0 text-sm text-zinc-500'>Install warm LED strip lights along the ceiling perimeter to create a cozy atmosphere and enhance the room depth.</p>

            </div>
            <div className='p-4 border border-zinc-200 rounded-lg space-y-2 '>
              <div className='flex justify-between items-start gap-2'>
                <h2 className='font-semibold text-base'>Add Ambient Lighting</h2>
                <span><CircleCheck size={20} className="text-emerald-600" /></span>
              </div>
              <p className='p-0 text-sm text-zinc-500'>Install warm LED strip lights along the ceiling perimeter to create a cozy atmosphere and enhance the room depth.</p>

            </div>
            <div className='p-4 border border-zinc-200 rounded-lg space-y-2 '>
              <div className='flex justify-between items-start gap-2'>
                <h2 className='font-semibold text-base'>Add Ambient Lighting</h2>
                <span><CircleCheck size={20} className="text-emerald-600" /></span>
              </div>
              <p className='p-0 text-sm text-zinc-500'>Install warm LED strip lights along the ceiling perimeter to create a cozy atmosphere and enhance the room depth.</p>

            </div>
            <div className='p-4 border border-zinc-200 rounded-lg space-y-2 '>
              <div className='flex justify-between items-start gap-2'>
                <h2 className='font-semibold text-base'>Add Ambient Lighting</h2>
                <span><CircleCheck size={20} className="text-emerald-600" /></span>
              </div>
              <p className='p-0 text-sm text-zinc-500'>Install warm LED strip lights along the ceiling perimeter to create a cozy atmosphere and enhance the room depth.</p>

            </div>

          </div>
        
     </div>

    </div>
  )
}

export default Results