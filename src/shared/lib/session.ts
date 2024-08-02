import { getServerSession } from "next-auth";
import { decrypt } from "./encryptions";
import { authOptions } from "../../../app/api/auth/[...nextauth]/authOptions";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { constantsMap } from "../model";


export async function getAccessToken() {

  const session = await getServerSession(authOptions);  
  if(session){    
    const accessTokenDecrypted = decrypt((session as any).access_token)    
    return accessTokenDecrypted;
  }
  return null;
}

export async function getIdToken() {

  const session = await getServerSession(authOptions);  
  if(session){    
    const idTokenDecrypted = decrypt((session as any).id_token)    
    return idTokenDecrypted;
  }
  return null;
}



export async function getExtData(req: NextRequest, res: NextResponse, path: string) {
  const session = await getServerSession(
    req as unknown as NextApiRequest,
    {
      ...res,
      getHeader: (name: string) => res.headers?.get(name),
      setHeader: (name: string, value: string) => res.headers?.set(name, value),
    } as unknown as NextApiResponse
    ,
    authOptions
  );

  if (!session) {
    NextResponse.json({ message: "You must be logged in." }, { status: 401 });
    return;
  }

  let accessToken = await getAccessToken();

  console.log(accessToken);

  const resp = await fetch(
    `${constantsMap.shared.config.apiUrl}/${path}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    }
  );

  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }
  const classifiers = await resp.json();
  return NextResponse.json(classifiers, { status: resp.status });
}
