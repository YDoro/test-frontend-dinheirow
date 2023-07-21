import { CharacterParser } from "@/data/protocols/helpers/character-parser";
import { FindCharacterService } from "@/data/protocols/services/find-character-service";
import { Character } from "@/domain/models/character";
import { APIFindCharacter } from "./api-find-character";

const makeSUT = () => {
  const fcs = makeFindCharacterService();
  const cp = makeCharacterParser();
  const sut = new APIFindCharacter(fcs, cp);
  return { sut, cp, fcs };
};

const fakeChar: Character = {
  id: 1,
  name: "mock boy",
  comics: [{ name: "the adventures of the mock boy", uri: "" }],
  description: "a strange hero that comes to test everyones patience",
  thumbnail: { extension: "JPEG", path: "path/to/exhaust" },
};

const makeCharacterParser = () => {
  class CharacterParserStub implements CharacterParser {
    toCharacterArray(obj: any): Character[] {
      return [fakeChar];
    }
  }
  return new CharacterParserStub();
};

const makeFindCharacterService = (): FindCharacterService => {
  class FindCharacterServiceStub implements FindCharacterService {
    async find(query: any): Promise<any> {
      return await new Promise((resolve) => resolve([]));
    }
  }
  return new FindCharacterServiceStub();
};
describe("find character", () => {
  test("should call find character service with the query", async () => {
    const { fcs, sut } = makeSUT();
    const fcsSpy = jest.spyOn(fcs, "find");
    await sut.find({ limit: 20, offset: 10 });
    expect(fcsSpy).toHaveBeenCalledWith({ limit: 20, offset: 10 });
  });

  test("should throw if find character service throws", async () => {
    const { fcs, sut } = makeSUT();
    jest.spyOn(fcs, "find").mockRejectedValueOnce(new Error("mock"));
    const promise = sut.find({ limit: 20, offset: 10 });
    expect(promise).rejects.toThrow();
  });

  test("should call character parser the service output", async () => {
    const { fcs, sut, cp } = makeSUT();
    const fakeServiceReponse = { lorem: "ipsum", sit: "dollor" };
    const cpSpy = jest.spyOn(cp, "toCharacterArray");
    jest.spyOn(fcs, "find").mockResolvedValueOnce(fakeServiceReponse);
    await sut.find({ limit: 20, offset: 10 });
    expect(cpSpy).toHaveBeenCalledWith(fakeServiceReponse);
  });

  test("should throw if character parser throws", async () => {
    const { sut, cp } = makeSUT();
    jest.spyOn(cp, "toCharacterArray").mockImplementationOnce((_) => {
      throw new Error("mocked");
    });
    const promise = sut.find({ limit: 20, offset: 10 });
    expect(promise).rejects.toThrow();
  });
});
