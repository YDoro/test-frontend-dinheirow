import { Hasher } from "@/data/protocols/criptography/hasher";
import { FindCharacterService } from "@/data/protocols/services/find-character-service";
import { QueryStringHelper } from "@/infra/helpers/query-string-helper";
import { HttpClient } from "@/infra/protocols/http";

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
    return new Promise((r) => r({}));
  }
}
