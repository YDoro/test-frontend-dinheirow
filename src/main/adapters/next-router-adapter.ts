import { Controller } from "@/presentation/protocols/controller";
import { NextRequest, NextResponse } from "next/server";

export const adaptRoute = async (req: NextRequest, controller: Controller) => {
  const query = Object.fromEntries(req.nextUrl.searchParams.entries());
  var body = {};
  try {
    body = await req.json();
  } catch (e) {}
  const res = await controller.handle({ query, body });

  return NextResponse.json(res.body);
};
