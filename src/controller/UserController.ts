import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class CreateUserController {
  constructor(
    private service: UserService
  ) { }

  create = async (req: Request, res: Response) => {
    try {
      const { email, password, role } = req.body;

      const id = await this.service.create(email, password, role)

      return res.status(201).json({ id });
    } catch (error: any) {
      console.error('TESTE', error.errors);
      res.status(500).json({ message: error.errors });
    }
  }
}