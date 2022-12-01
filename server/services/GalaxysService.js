import { dbContext } from "../db/DbContext.js";





class GalaxysService {
  async create(body) {
    const newGalaxy = await dbContext.Galaxy.create(body)
    return newGalaxy
  }
  async getAll() {
    const galaxies = await dbContext.Galaxy.find()
    return galaxies
  }

}




export const galaxysService = new GalaxysService();