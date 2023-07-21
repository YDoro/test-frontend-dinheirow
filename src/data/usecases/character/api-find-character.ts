import { CharacterParser } from "@/data/protocols/helpers/character-parser";
import { FindCharacterService } from "@/data/protocols/services/find-character-service";
import { Character } from "@/domain/models/character";
import { FindCharacter } from "@/domain/usecases/find-character";

export class APIFindCharacter implements FindCharacter {
  constructor(
    private readonly findCharacterService: FindCharacterService,
    private readonly characterParser: CharacterParser
  ) {}
  async find(query: any): Promise<Character[]> {
    const serviceResponse = await this.findCharacterService.find(query);
    return this.characterParser.toCharacterArray(serviceResponse);
  }
}
