import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { request } from "../../../../lib/api";


async function refreshAccessToken(tokenObject:any) {
  try {
    // console.log("refreshAccessToken", tokenObject);
    const headers = { Authorization: `Bearer ${tokenObject.refreshToken}` };
    const tokenResponse = await request({
      method: "POST",
      url: "/api/user/refresh-token",
      headers: headers,
    });
    return {
      ...tokenObject,
      accessToken: tokenResponse.accessToken,
      accessTokenExpiry: tokenResponse.accessTokenExpiry,
      refreshToken: tokenResponse.refreshToken,
    };
  } catch (error) {
    return null;
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "로그인..",
      credentials: {
        userId: { label: "아이디", type: "text" },
        password: { label: "비밀번호", type: "password" },
        // ip: { label: "ip", type: "text" },
      },
      async authorize(credentials, req) {
        try {
          const data = await request({
            method: "POST",
            url: "/api/user/login",
            data: {
              userId: credentials?.userId,
              password: credentials?.password,
              // ip: credentials?.ip,
            },
          });
          if (data.status === 500) {
            throw new Error(data.message);
          }
          return data;
        } catch (error) {
          const response :any= error;
          throw new Error(response.message);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }:any) {
      if (token) {
        session.userId = token.userId;
        session.userName = token.userName;
        // session.companyName = token.companyName;
        session.accessToken = token.accessToken;
        session.accessTokenExpiry = token.accessTokenExpiry;
        session.error = token.error;
      }
      return Promise.resolve(session);
    },
    async jwt({ token, user }:any) {
      if (user) {
        token.userId = user.userId;
        token.userName = user.userName;
        // token.companyName = user.companyName;
        token.accessToken = user.accessToken;
        token.accessTokenExpiry = user.accessTokenExpiry;
        token.refreshToken = user.refreshToken;
      }

      const shouldRefreshTime = Math.round(
        token.accessTokenExpiry - Date.now()
      );

      if (shouldRefreshTime > 0) {
        return Promise.resolve(token);
      }

      const tokenInfo = await refreshAccessToken(token);

      return tokenInfo;
    },
  },

  secret: process.env.NEXT_AUTH_JWT_SECRET,

  pages: {
    signIn: "/admin",
  },
});
