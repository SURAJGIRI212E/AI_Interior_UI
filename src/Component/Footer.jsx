

import Features from './Features'

export const Footer = () => {
  return (
    <div className='text-zinc-500 text-sm flex justify-between items-center mt-16 py-6 px-2 border-t border-zinc-100'>
        <p>© 2026 InteriorAI. Transform your space with AI-powered design.</p>
        <div className='flex justify-between items-center gap-2'>
            <div>Privacy</div>
            <div>Terms</div>
            <div>Contact</div>
        </div>
    </div>
   
  )
}
