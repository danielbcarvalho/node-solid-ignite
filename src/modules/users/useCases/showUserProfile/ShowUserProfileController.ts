import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    this.showUserProfileUseCase.execute(request.body);

    return response.status(200);
  }
}

export { ShowUserProfileController };
