import { Sparkles, } from "lucide-react";
import UploadImage from "@/Component/UploadImage";
import Features from "@/Component/Features";

export default function Home() {
  return (
  <>
   <main className="text-center my-8 py-8 space-y-4">
    <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-amber-100 text-amber-800 text-sm font-medium">
      <span><Sparkles size={20}/></span>
      <span>AI-Powered Interior Design</span>
    </div>
    <h1 className="text-5xl font-bold tracking-tight">Transform Your Space with <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">AI Magic</span></h1>
    <p className=" mx-32 text-lg text-zinc-500 tracking-tight">Upload a photo of your room and get personalized design suggestions to make it beautiful, functional, and uniquely yours.</p>
    <div className="relative w-full max-w-4xl mt-20 mx-auto">
      <UploadImage />
    </div>
   </main>
   <div className="mx-auto ">
    <Features />
   </div>
   </>
  );
}
