import { Router } from "express";
import { CreateUserControllerFactory } from "../application/factories/CreateUserControllerFactory";
import { CreateTagControllerFactory } from "../application/factories/CreateTagControllerFactory";
import ExpressRoutesAdapter from "../infrastructure/adapters/expressjs/express-routes.adapter";

const routes = Router();

const createUserController = CreateUserControllerFactory.make();
const createTagController = CreateTagControllerFactory.make();

routes.post('/user', [createUserController.handle])
routes.post('/tag', ExpressRoutesAdapter.adapt(createTagController))

export default routes;