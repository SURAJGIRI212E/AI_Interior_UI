'use client'
import { useState, useActionState, useRef } from 'react'
import Image from 'next/image'
import { Upload, X, Sparkles, ArrowRight, Maximize } from 'lucide-react'
import { analyzeImageAction } from '../app/actions.js'

export default function UploadImage() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState()
  const fileInputRef = useRef(null); // to manually clear the input

  const [state, formAction, isPending] = useActionState(analyzeImageAction, null);

  const handleFormAction = async (formData) => {
    //Notes: formdata get clear after every formaction call. for retry logic
    // If we have a selectedFile but no file in formData, add it
    if (selectedFile && (!formData.get('media') || formData.get('media').size === 0)) {
      const newFormData = new FormData();
      newFormData.append('media', selectedFile);
      return formAction(newFormData);
    }
    return formAction(formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB

    if (file) {
      if (file.size > MAX_SIZE) {
        setError(`This file is too big! Please select an image smaller than ${MAX_SIZE}.`);
        e.target.value = "";
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleClear = () => {
    setPreviewUrl(null);
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = ""; // Physically clear the file
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form action={handleFormAction} className="space-y-4">
        
        {/* 1. THE HIDDEN INPUT*/}
        <input ref={fileInputRef} type="file" name="media" className="hidden" accept="image/*" onChange={handleFileChange} />

        <div className="relative aspect-video rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50/30 overflow-hidden flex items-center justify-center">
          {previewUrl ? (
            /* PREVIEW image */
            <>
              <Image src={previewUrl} alt="Preview" fill className="object-cover" />
              <button type="button"onClick={handleClear}
                className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 z-10"
              ><X size={20} />
              </button>
            </>
          ) : (
            /* UPLOAD UI  */
            <div className="flex flex-col items-center gap-3">
              <div className="p-4 bg-amber-100 rounded-full text-amber-600">
                <Upload size={32} />
              </div>
              <div className="text-center">
                <p className="font-semibold text-amber-900">Upload Interior Photo</p>
                <p className="text-xs text-zinc-500">JPG, PNG or WebP less than 5mb</p>
              </div>
              {/* Clicking this label triggers the hidden input above */}
              <button 
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-transform active:scale-95"
              >
                Choose Files
              </button>
            </div>
          )}
        </div>

        {/* Action Button */}
        {previewUrl && (
          <button
            type="submit"
            disabled={isPending}
            className={`w-full flex items-center justify-center gap-3 py-3 rounded-xl font-bold text-white transition-all
              ${isPending ? 'bg-amber-400' : 'bg-amber-600 hover:bg-amber-700 shadow-lg'}`}
          >
            <Sparkles size={20} className={isPending ? "animate-spin" : ""} />
            {isPending ? "AI is Analyzing..." : "Analyze & Get Suggestion"}
            {!isPending && <ArrowRight size={18} />}
          </button>
        )}

        {error && <p className="text-red-500 text-center font-medium">{error}</p>}
        {/* Server Response Messages */}
        {state?.error && <p className="text-red-500 text-center font-medium">{state.error}</p>}
        {state?.success && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
            {state.message}
          </div>
        )}
      </form>
    </div>
  );
}