import mongoose from 'mongoose'

const GallerySchema = new mongoose.Schema(
  {
    img: { type: String, required: true }, // Vercel Blob URL
    caption: { type: String },
    category: { type: String, default: 'General' }, // e.g., Rooms, Exterior, Nature
  },
  { timestamps: true }
)

export const Gallery = mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema)
