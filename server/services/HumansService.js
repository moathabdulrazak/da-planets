import { dbContext } from "../db/DbContext.js";




class HumansService {
  async getAll() {
    const humnas = await dbContext.Human.find()
    return humnas
  }
  async create(body) {
    const newHuman = await (await dbContext.Human.create(body))
    return newHuman
  }


}


export const humansService = new HumansService();