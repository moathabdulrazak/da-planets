import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxysService } from "../services/GalaxysService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";


function _middleWareDemo(req, res, next) {
  logger.log('hitting')
  next()
}


export class GalaxysController extends BaseController {
  constructor() {
    super('api/galaxy')
    this.router
      .get('', this.getAll)
      .use(_middleWareDemo)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }
  async getAll(req, res, next) {
    try {
      const galaxies = await galaxysService.getAll()
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      const galaxy = await galaxysService.create(req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}