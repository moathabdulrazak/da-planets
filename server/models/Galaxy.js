import { Schema } from "mongoose";










export const GalaxySchema = new Schema({
  name: { type: String, required: true },
  stars: { type: Number, required: true, default: 0 }
}, { timestamps: true, toJSON: { virtuals: true } })






GalaxySchema.virtual('galaxy', {
  localField: ''
})