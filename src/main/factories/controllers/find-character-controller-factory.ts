import { FindCharacterController } from "@/presentation/controllers/find-character-controller";
import { makeMarvelFindCharacterUC } from "../usecases/find-character";

export const makeMarvelFindCharacterController = () => {
  return new FindCharacterController(makeMarvelFindCharacterUC());
};
