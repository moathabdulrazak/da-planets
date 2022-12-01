import { Schema } from "mongoose";


const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
  name: { type: String, required: true },
  biome: { type: String, required: true },
  atmosphere: { type: Boolean, required: true, default: false },
  galaxyId: { type: ObjectId, required: true, ref: 'Galaxy' },
}, { timestamps: true, toJSON: { virtuals: true } })






PlanetSchema.virtual('Galaxy', {
  localField: 'galaxyId',
  ref: 'Galaxy',
  foreignField: '_id',
  justOne: true
})