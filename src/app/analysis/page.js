import { ArrowLeft, ArrowRight, WandSparkles } from 'lucide-react'
import Image from 'next/image'
import before from '../../before.jpg'
import Link from 'next/link'
import Suggestion from '@/Component/Suggestion'
import { Suspense } from 'react'

 const Analysis =async ({searchParams}) => {

const selected=true
const loading=false
const params = await searchParams;
const imageUrl = params.image;

  return (
    <>
    <div className='my-8 mx-auto px-3 space-y-8'>
        {/* header */}
        <div className='flex items-center gap-4'>
            <Link href='/'><ArrowLeft size={18} /></Link>
            <div>
                <h1 className='text-3xl font-bold'>AI Design Analysis</h1>
                <p className='text-zinc-500'>Review and select the suggestions you had like to apply</p>
            </div>
        </div>
        {/* imagecontainer */}
        <div className='space-y-4'>
            <h1 className='text-lg font-semibold'>Your Original Space</h1>
            <div className='aspect-auto'>
                <Image src={imageUrl} alt="original room" width={800} height={400} className='rounded-xl object-cover w-full h-full'/>
            </div>
        </div>
        {/* loading required */}
        <Suspense fallback={
            <div className="flex items-center justify-center h-40 text-amber-600 gap-2">
                <WandSparkles className="animate-spin"/> 
                <span className="font-semibold">Analyzing your space...</span>
            </div>
        }>
          <Suggestion imageUrl={imageUrl} />
        </Suspense>
    </div>
      {/* action button */}
        <div className='flex justify-between items-center gap-4 sticky bottom-0 bg-white pb-4'>
                 <Link href='/'  className='flex justify-center items-center gap-4 border border-zinc-300 px-4 py-3 rounded-lg shadow-2xl shadow-black/50 text-sm w-full bg-white hover:bg-zinc-200' >
                    <span><ArrowLeft size={16}/></span>
                    <span className='font-semibold'>Back to Upload</span>
                </Link>
                <Link href={`/results?image=${encodeURIComponent(imageUrl)}`} disabled={!selected} className={`my-5 w-full flex justify-center gap-4 items-center py-3 px-4 rounded-lg shadow-2xl shadow-black/50 text-white text-sm font-semibold  ${!loading && selected ? 'bg-amber-600':'bg-amber-200'}  hover:bg-amber-700`}>
                    <span className={`${loading?'animate-spin':''}`}><WandSparkles size={20}/></span> 
                    <span>{!loading ? 'Generate New design':'Generating...'} </span>
                    <span><ArrowRight size={16}/></span>
                </Link>
            </div>
            </>
  )
}
export default Analysis