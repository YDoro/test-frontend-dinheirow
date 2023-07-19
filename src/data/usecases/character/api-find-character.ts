import { FindCharacterService } from "@/data/protocols/services/find-character-service";
import { Character } from "@/domain/models/character";
import { FindCharacter } from "@/domain/usecases/find-character";

export class APIFindCharacter implements FindCharacter {
  constructor(private readonly findCharacterService: FindCharacterService) {}
  find(query: any): Promise<Character[]> {
    throw new Error("Method not implemented.");
  }
}
