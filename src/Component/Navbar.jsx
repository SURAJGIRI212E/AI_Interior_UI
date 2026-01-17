import { House, Sparkles } from "lucide-react"


const Navbar = () => {
  return (
    
    <div className="z-50 backdrop-blur-xl border-b border-zinc-100 bg-white/50 flex justify-between items-center sticky top-0 py-2 px-4 h-16 ">
        <div className="flex gap-3 items-center">
            <div className="bg-linear-to-r from-amber-500 to-orange-500 rounded-lg p-2 shadow-md "><House size={20} color="#FAFAFA"/></div>
            <div className="flex flex-col">
                <span className="font-bold text-lg leading-none bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">InteriorAI</span>
                <span className="text-xs text-zinc-500">Design Assitance</span>
            </div>
        </div>
        <div className="flex justify-between items-center gap-2">
           <div>
            <div className="p-4 text-sm font-semibold text-zinc-500">Home</div>
            </div>
           <div>
            <button className="flex justify-center gap-2 items-center py-2 px-4 rounded-lg text-white text-sm font-bold  bg-amber-600 hover:bg-amber-700 cursor-pointer">
                <span><Sparkles size={20}/>
                </span> <span>New Design</span>
            </button>
           </div>

        </div>
    </div>
  )
}

export default Navbar