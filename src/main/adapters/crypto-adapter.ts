import { Hasher } from "@/data/protocols/criptography/hasher";
import CryptoJs from "crypto-js";

type HashTypes = "md5";
export class CryptoAdapter implements Hasher {
  constructor(private readonly hashType: HashTypes) {}
  async hash(value: string): Promise<string> {
    switch (this.hashType) {
      case "md5":
        return CryptoJs.MD5(value).toString();
    }
  }
}
