import { Schema } from "mongoose";







export const HumanSchema = new Schema({
  name: { type: String, required: true }
})