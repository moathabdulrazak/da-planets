import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ColonySchema } from "../models/Colony.js";
import { GalaxySchema } from "../models/Galaxy.js";
import { HumanSchema } from "../models/Human.js";
import { PlanetSchema } from "../models/Planet.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxy = mongoose.model('Galaxy', GalaxySchema);

  Planet = mongoose.model('Planet', PlanetSchema);

  Colony = mongoose.model('Colony', ColonySchema)

  Human = mongoose.model('Human', HumanSchema)
}

export const dbContext = new DbContext()
