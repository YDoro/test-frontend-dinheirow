import { QueryStringHelper } from "@/infra/helpers/query-string-helper";
import { MarvelAPIService } from "@/infra/services/marvel/marvel-api-service";
import { CryptoAdapter } from "@/main/adapters/crypto-adapter";
import { axiosAdapter } from "@/main/adapters/http-client";

export const makeMarvelAPIService = () => {
  const hasher = new CryptoAdapter("md5");
  const httpClient = axiosAdapter("get it from env");
  const qsHelper = new QueryStringHelper();
  const ts = new Date().getTime().toString();
  const privateKey = "get it from env";
  const publicKey = "get it from env";

  return new MarvelAPIService(
    hasher,
    httpClient,
    qsHelper,
    privateKey,
    publicKey,
    ts
  );
};
