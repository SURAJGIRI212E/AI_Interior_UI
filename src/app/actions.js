// app/actions.js
'use server'
import { redirect } from 'next/navigation'
import { v2 as cloudinary } from 'cloudinary'

// Configure Cloudinary (Put these in .env)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function analyzeImageAction(prevState, formData) {
  const file = formData.get('media')

  if (!file || file.size === 0) {
    return { error: "Please select an image first." }
  }
let imageUrl
  try {
    // 1. Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // 2. Upload to Cloudinary
    const uploadResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({
        folder: "before",
      }, (error, result) => {
        if (error) reject(error)
        else resolve(result)
      }).end(buffer)
    })

     imageUrl = uploadResponse.secure_url

  } catch (e) {
    console.error(e)
    return { error: "Upload failed. Please try again." }
  }

  // This redirect happens outside the try/catch usually
  redirect(`/analysis?image=${encodeURIComponent(imageUrl)}`)
}