import { Hasher } from "@/data/protocols/criptography/hasher";
import { HttpClient } from "@/infra/protocols/http";
import { QueryStringHelper } from "../../helpers/query-string-helper";
import { MarvelAPIService } from "./marvel-api-service";

interface SUTTypes {
  sut: MarvelAPIService;
  hasher: Hasher;
  httpClient: HttpClient;
  qsHelper: QueryStringHelper;
}

const makeFakeHasher = (): Hasher => {
  class HasherStub implements Hasher {
    hash(value: string): Promise<string> {
      return new Promise((r) => r(`hashed_${value}`));
    }
  }
  return new HasherStub();
};
const makeFakeHttpClient = (): HttpClient => {
  class HttpClientStub implements HttpClient {
    get(url: string): Promise<any> {
      return new Promise((r) => r({}));
    }
  }
  return new HttpClientStub();
};
const privateKey = "123456";
const publicKey = "asdfg";
const ts = "11";
const makeSUT = (): SUTTypes => {
  const hasher = makeFakeHasher();
  const httpClient = makeFakeHttpClient();
  const qsHelper = new QueryStringHelper();
  const sut = new MarvelAPIService(
    hasher,
    httpClient,
    qsHelper,
    privateKey,
    publicKey,
    ts
  );
  return { sut, hasher, httpClient, qsHelper };
};

describe("Marvel API service", () => {
  //TODO - perform tests
  test("should call hasher with ts+privateKey+publicKey", async () => {
    const { sut, hasher } = makeSUT();
    const hasherSpy = jest.spyOn(hasher, "hash");
    await sut.find({});
    expect(hasherSpy).toHaveBeenCalledWith(ts + privateKey + publicKey);
  });
  test("should throw if hasher throws", async () => {
    const { sut, hasher } = makeSUT();
    jest.spyOn(hasher, "hash").mockRejectedValueOnce(new Error("mock"));
    const promise = sut.find({});
    expect(promise).rejects.toThrow();
  });
  test("should call qsHelper with ts publicKey and hash", async () => {
    const { sut, qsHelper } = makeSUT();
    const querySpy = jest.spyOn(qsHelper, "fromObject");
    const fakeHash = `hashed_${ts}${privateKey}${publicKey}`;
    await sut.find({ lorem: "ispum" });

    expect(querySpy).toHaveBeenCalledWith({
      ts,
      apiKey: publicKey,
      hash: fakeHash,
      lorem: "ispum",
    });
  });
});
