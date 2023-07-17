import { Router } from "express";
import { CreateUserControllerFactory } from "../factories/UserControllerFactory";
import ExpressRoutesAdapter from "../adapters/expressjs/express-routes.adapter";
import { CreateTagControllerFactory } from "../factories/TagControllerFactory";
import UserValidator from "../validator/UserValidator";

const routes = Router();

const createUserController = CreateUserControllerFactory.make();
const createTagController = CreateTagControllerFactory.make();

routes.post('/user', [UserValidator.userCreateValidator, createUserController.create])
routes.post('/tag', ExpressRoutesAdapter.adapt(createTagController))

export default routes;