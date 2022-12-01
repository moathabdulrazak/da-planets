import { humansService } from "../services/HumansService.js";
import BaseController from "../utils/BaseController.js";









export class HumansController extends BaseController {
  constructor() {
    super('api/humans')
    this.router
      .get('', this.getAll)
      .post('', this.create)
  }
  async create(req, res, next) {
    try {
      const humans = await humansService.create(req.body)
      return res.send(humans)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      const humans = await humansService.getAll()
      return res.send(humans)
    } catch (error) {
      next(error)
    }
  }
}