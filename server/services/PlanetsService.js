import { dbContext } from "../db/DbContext.js";






class PlanetsService {
  async create(body) {
    const newPlanet = await (await dbContext.Planet.create(body)).populate('Galaxy')
    return newPlanet
  }
  async getAll() {
    const planets = await dbContext.Planet.find().populate('Galaxy')
    return planets
  }

}








export const planetsService = new PlanetsService();