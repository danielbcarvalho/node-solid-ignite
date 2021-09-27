import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    this.createUserUseCase.execute(request.body);

    return response.status(200);
  }
}

export { CreateUserController };
