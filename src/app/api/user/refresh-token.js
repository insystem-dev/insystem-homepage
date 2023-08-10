import { getTokenInfo, verifyToken } from "../../../lib/jwt";

export default function handler(req, res) {
  getTokenInfoByUser(req, res);
}

async function getTokenInfoByUser(req, res) {
  const token = await verifyToken(req.headers.authorization);

  const userTokenInfo = getTokenInfo({
    userId: token.userId,
    userName: token.userName,
  });

  res.send(userTokenInfo);
}
