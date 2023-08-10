import { QueryTypes } from "sequelize";
import { sequelize } from "../../../../models";
import * as jwt from "jsonwebtoken";
import { getTokenInfo } from "../../../lib/jwt";

export default function handler(req, res) {
  // if (req.method === "GET" && id) {
  //   boardGetOne(req, res, id);
  // } else if (req.method == "GET") {
  //   boardGet(req, res);
  // } else if (req.method === "POST") {
  login(req, res);
  // } else if (req.method === "PUT") {
  //   boardUpdate(req, res);
  // } else if (req.method === "DELETE") {
  //   boardDelete(req, res, id);
  // }
}

async function login(req, res) {
  try {
    const { userId, password } = req.body;

    const user = await sequelize.query(
      `
        SELECT * FROM User
        WHERE TRUE
        AND User_Id = :userId
        AND Password = :password
      `,
      {
        replacements: { userId, password },
        type: QueryTypes.SELECT,
      }
    );

    if (user.length === 0) {
      // throw new Error("유저가 존재하지 않습니다");
      res.json({ status: 500, message: "유저가 존재하지 않습니다" });
      return;
    }

    const userTokenInfo = getTokenInfo({
      userId: user[0].User_Id,
      userName: user[0].User_Name,
    });

    res.send(userTokenInfo);
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}
