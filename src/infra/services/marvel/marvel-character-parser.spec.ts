import { MarvelCharacterResponse } from "@/infra/protocols/services/marvel/character-request";
import { MarvelCharacterParser } from "./marvel-character-parser";

const fakeApiResponse: MarvelCharacterResponse = {
  code: 200,
  status: "Ok",
  copyright: "© 2023 MARVEL",
  attributionText: "Data provided by Marvel. © 2023 MARVEL",
  attributionHTML:
    '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 1010743,
        name: "Groot",
        description: "",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/3/10/526033c8b474a",
          extension: "jpg",
        },
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1010743",
        comics: {
          available: 63,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1010743/comics",
          items: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16009",
              name: "Annihilation: Conquest - Starlord (2007) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16191",
              name: "Annihilation: Conquest - Starlord (2007) #2",
            },
          ],
          returned: 20,
        },
        series: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1010743/series",
          items: [],
          returned: 0,
        },
        stories: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1010743/stories",
          items: [],
          returned: 0,
        },
        events: {
          available: 0,
          collectionURI:
            "http://gateway.marvel.com/v1/public/characters/1010743/events",
          items: [],
          returned: 0,
        },
        urls: [
          {
            type: "detail",
            url: "http://marvel.com/characters/866/groot?utm_campaign=apiRef&utm_source=02eb08dd1db346e0572874317acd9849",
          },
        ],
      },
    ],
  },
};

describe("Marvel Character parser", () => {
  test("should return an empty array if object is not parseable", () => {
    const sut = new MarvelCharacterParser();
    const res = sut.toCharacterArray({});
    expect(res).toEqual([]);
  });
  test("should return description not informed if description not given", () => {
    const sut = new MarvelCharacterParser();
    const res = sut.toCharacterArray(fakeApiResponse);
    expect(res[0].description).toEqual("description not informed");
  });
  test("should return a valid character", () => {
    const sut = new MarvelCharacterParser();
    const res = sut.toCharacterArray(fakeApiResponse);
    expect(res[0].name).toEqual(fakeApiResponse.data?.results?.at(0)?.name);
  });
});
