import { APIFindCharacter } from "@/data/usecases/character/api-find-character";
import { MarvelCharacterParser } from "@/infra/services/marvel/marvel-character-parser";
import { makeMarvelAPIService } from "../services/marvel-api-service-factory";

export const makeMarvelFindCharacterUC = () => {
  return new APIFindCharacter(
    makeMarvelAPIService(),
    new MarvelCharacterParser()
  );
};
