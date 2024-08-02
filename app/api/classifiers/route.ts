
import { getServerSession } from "next-auth/next"
import { getAccessToken, getExtData } from "@/shared/lib/session"
import { apiMap, constantsMap } from "@/shared/model"
import { authOptions } from "../auth/[...nextauth]/authOptions"
import { NextRequest, NextResponse } from "next/server"
import { NextApiRequest, NextApiResponse } from "next"

export async function GET(
  req: NextRequest,
  res: NextResponse) {

  return getExtData(req, res, apiMap.getClassifiers);    
}