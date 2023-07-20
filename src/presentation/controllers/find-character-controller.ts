import { FindCharacter } from "@/domain/usecases/find-character";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";

//TODO - create a controller to be called by the nextJS API
export class FindCharacterController implements Controller {
  constructor(private readonly findCharacter: FindCharacter) {}
  async handle(req: HttpRequest): Promise<HttpResponse> {
    const res = await this.findCharacter.find(req.query);
    return { statusCode: 200, body: {} };
  }
}
