import { Character } from "../models/character";
import { Query } from "../types/query";

export interface FindCharacter {
  find(query?: Query): Promise<Array<Character>>;
}
