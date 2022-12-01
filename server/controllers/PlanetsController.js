import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";







export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .post('', this.create)
  }
  async create(req, res, next) {
    try {
      const planets = await planetsService.create(req.body)
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
  async getAll(req, res, next) {
    try {
      const planets = await planetsService.getAll()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}