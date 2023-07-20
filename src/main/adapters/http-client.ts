import { HttpClient } from "@/infra/protocols/http";
import axios from "axios";

export const axiosAdapter = (baseURL: string): HttpClient =>
  axios.create({ baseURL });
