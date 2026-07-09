import mongoose from 'mongoose'

const RoomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true }, // e.g., 'By the hour', 'Full night'
    price: { type: String, required: true },
    desc: { type: String, required: true },
    guests: { type: String, required: true },
    bed: { type: String, required: true },
    features: [{ type: String }],
    img: { type: String, required: true }, // Vercel Blob URL
  },
  { timestamps: true }
)

export const Room = mongoose.models.Room || mongoose.model('Room', RoomSchema)
