import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true }, // Markdown or HTML string
    coverImage: { type: String, required: true }, // Vercel Blob URL
    author: { type: String, default: 'Admin' },
  },
  { timestamps: true }
)

export const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema)
