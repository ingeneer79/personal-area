import { getExtData } from "@/shared/lib/session";
import { apiMap } from "@/shared/model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  return getExtData(req, res, apiMap.getCatalog);
}
