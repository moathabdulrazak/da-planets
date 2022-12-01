import { dbContext } from "../db/DbContext.js"

class ColoniesService {
  async create(body) {
    const newColony = await (await dbContext.Colony.create(body)).populate("Human Planet")
    return newColony
  }
  async getAll() {
    // throw new Error("Method not implemented.");
    const colonies = await dbContext.Colony.find().populate('Human Planet')
    return colonies
  }

  // async getHumansByColonyId(colonyId) {
  //   const humans = await dbContext.Human.find({ colonyId })
  // }

}

export const coloniesService = new ColoniesService()