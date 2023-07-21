import { Hasher } from "@/data/protocols/criptography/hasher";
import { FindCharacterService } from "@/data/protocols/services/find-character-service";
import { QueryStringHelper } from "@/infra/helpers/query-string-helper";
import { HttpClient } from "@/infra/protocols/http";
import { MarvelCharacterResponse } from "@/infra/protocols/services/marvel/character-request";
import { ServiceFailed } from "../../../presentation/errors/service-failed";

export class MarvelAPIService implements FindCharacterService {
  constructor(
    private readonly hasher: Hasher,
    private readonly httpClient: HttpClient,
    private readonly qsHelper: QueryStringHelper,
    private readonly privateKey: string,
    private readonly publicKey: string,
    private readonly ts: string
  ) {}

  async find(query: any): Promise<any> {
    const hash = await this.hasher.hash(
      this.ts + this.privateKey + this.publicKey
    );
    const q = this.qsHelper.fromObject({
      ts: this.ts,
      apikey: this.publicKey,
      hash,
      ...query,
    });

    const res = await this.httpClient.get<MarvelCharacterResponse>(
      "/v1/public/characters" + q
    );
    if (res.status === 200) return res.data;

    throw new ServiceFailed(MarvelAPIService.name, res);
  }
}
