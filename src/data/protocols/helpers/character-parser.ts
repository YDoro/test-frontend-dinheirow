import { Character } from "@/domain/models/character";

export interface CharacterParser {
  toCharacterArray(obj: any): Character[];
}
