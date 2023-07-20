import { HttpClient } from "@/infra/protocols/http";
import axios from "axios";

export const httpClient = (baseURL: string): HttpClient =>
  axios.create({ baseURL });
