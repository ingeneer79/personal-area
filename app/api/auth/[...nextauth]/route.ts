import NextAuth, { NextAuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import { encrypt } from "@/shared/lib/encryptions";
import jwt_decode, { jwtDecode } from 'jwt-decode';
import { authOptions } from "./authOptions";

// this will refresh an expired access token, when needed


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};
