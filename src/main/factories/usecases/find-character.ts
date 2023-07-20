import { APIFindCharacter } from "@/data/usecases/character/api-find-character";
import { makeMarvelAPIService } from "../services/marvel-api-service-factory";

export const makeMarvelFindCharacterUC = () => {
  return new APIFindCharacter(makeMarvelAPIService());
};
