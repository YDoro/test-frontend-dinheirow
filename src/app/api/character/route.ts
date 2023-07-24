import { adaptRoute } from "@/main/adapters/next-router-adapter";
import { makeMarvelFindCharacterController } from "@/main/factories/controllers/find-character-controller-factory";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return await adaptRoute(req, makeMarvelFindCharacterController());
}
