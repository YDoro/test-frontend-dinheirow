import { QueryStringHelper } from "@/infra/helpers/query-string-helper";
import { MarvelAPIService } from "@/infra/services/marvel/marvel-api-service";
import { CryptoAdapter } from "@/main/adapters/crypto-adapter";
import { axiosAdapter } from "@/main/adapters/http-client";
import { env } from "@/main/config/env";

export const makeMarvelAPIService = () => {
  const hasher = new CryptoAdapter("md5");
  const httpClient = axiosAdapter(env.marvelAPI);
  const qsHelper = new QueryStringHelper();
  const ts = new Date().getTime().toString();
  const privateKey = env.marvelPrivateKey;
  const publicKey = env.marvelPublicKey;

  return new MarvelAPIService(
    hasher,
    httpClient,
    qsHelper,
    privateKey,
    publicKey,
    ts
  );
};
