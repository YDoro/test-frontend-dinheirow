import { FindCharacterService } from "@/data/protocols/services/find-character-service";
import { APIFindCharacter } from "./api-find-character";

interface SUTTypes {
  sut: APIFindCharacter;
  fcs: FindCharacterService;
}

const makeSUT = (): SUTTypes => {
  const fcs = makeFindCharacterService();
  const sut = new APIFindCharacter(fcs);
  return { sut, fcs };
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
});
