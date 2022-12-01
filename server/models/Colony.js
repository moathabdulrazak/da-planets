import { Schema } from "mongoose";


const ObjectId = Schema.Types.ObjectId





export const ColonySchema = new Schema({
  name: { type: String, required: true },
  population: { type: Number, required: true, default: 0 },
  planetId: { type: ObjectId, required: true, ref: 'Planet' },
  humanId: { type: ObjectId, required: true, ref: 'Human' },
}, { timestamps: true, toJSON: { virtuals: true } })



ColonySchema.virtual('Planet', {
  localField: 'planetId',
  ref: "Planet",
  foreignField: "_id",
  justOne: true
})


ColonySchema.virtual('Human', {
  localField: 'humanId',
  ref: 'Human',
  foreignField: '_id',
  justOne: true
})