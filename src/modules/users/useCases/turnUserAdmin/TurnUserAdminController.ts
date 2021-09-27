import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    this.turnUserAdminUseCase.execute(request.body);

    return response.status(200);
  }
}

export { TurnUserAdminController };
