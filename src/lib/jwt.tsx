import * as jwt from "jsonwebtoken";

const ACCESS_TOKEN_EXPIRES = 60 * 5 * 1000;

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES, //토큰 유지 기간
  });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "180d",
  });
};

export function getTokenInfo(user) {
  const accessToken = createAccessToken(user);
  const refreshToken = createRefreshToken(user);

  return {
    ...user,
    accessToken: accessToken,
    accessTokenExpiry: Date.now() + ACCESS_TOKEN_EXPIRES,
    refreshToken: refreshToken,
  };
}

export function verifyToken(token) {
  return new Promise((resolve, reject) => {
    token = token.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_REFRESH_SECRET, (error, decode) => {
      if (error) reject(error);
      resolve(decode);
    });
  });
}
