import { CharacterParser } from "@/data/protocols/helpers/character-parser";
import { Character } from "@/domain/models/character";
import { MarvelCharacterResponse } from "@/infra/protocols/services/marvel/character-request";

export class MarvelCharacterParser implements CharacterParser {
  toCharacterArray(obj: MarvelCharacterResponse): Character[] {
    const chars: Character[] = [];
    if (obj?.data?.results) {
      obj.data.results.forEach((c) => {
        const { id, name, description, thumbnail, comics } = c;

        var char: Character = {
          id: id || 0,
          name: name || "nameless character",
          description: description || "description not informed",
          thumbnail: {
            extension: thumbnail?.extension || "",
            path: thumbnail?.path || "",
          },
          comics:
            comics?.items?.map((c) => {
              return {
                name: c.name || "name not given",
                uri: c.resourceURI || "",
              };
            }) || [],
        };
        chars.push(char);
      });
    }
    return chars;
  }
}
