import { QueryTypes } from "sequelize";
import { sequelize } from "../../../../models";

export default function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET" && id) {
    boardGetOne(req, res, id);
  } else if (req.method == "GET") {
    boardGet(req, res);
  } else if (req.method === "POST") {
    boardCreate(req, res);
  } else if (req.method === "PUT") {
    boardUpdate(req, res);
  } else if (req.method === "DELETE") {
    boardDelete(req, res, id);
  }
}

const boardGet = async (req, res) => {
  try {
    const result = await sequelize.query(`SELECT * FROM Notice_Board`, {
      type: QueryTypes.SELECT,
    });

    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const boardGetOne = async (req, res, id) => {
  try {
    await sequelize.query(
      `
        UPDATE Notice_Board
        SET views = views + 1
        WHERE id = :id
      `,
      {
        replacements: { id: parseInt(id) },
        type: QueryTypes.UPDATE,
      }
    );

    const nextPost = await sequelize.query(
      `
      SELECT MIN(id) AS nextPost
      FROM Notice_Board
      WHERE id > :id
      `,
      {
        replacements: { id: parseInt(id) },
        type: QueryTypes.SELECT,
      }
    );

    const prevPost = await sequelize.query(
      `
      SELECT MAX(id) AS prevPost
      FROM Notice_Board
      WHERE id < :id
      `,
      {
        replacements: { id: parseInt(id) },
        type: QueryTypes.SELECT,
      }
    );

    const result = await sequelize.query(
      `
      SELECT * FROM Notice_Board
      WHERE id = :id
      `,
      {
        replacements: { id: parseInt(id) },
        type: QueryTypes.SELECT,
      }
    );

    result[0].nextPost = nextPost[0].nextPost;
    result[0].prevPost = prevPost[0].prevPost;

    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const boardCreate = async (req, res) => {
  try {
    const result = await sequelize.query(
      `
      INSERT INTO Notice_Board 
      (title, content, fixed, username, user_id, views)
      VALUES
      (:title, :content, :fixed, :username, :user_id, :views)
      `,
      {
        replacements: {
          ...req.body,
          username: "관리자",
          user_id: "admin",
          views: 0,
        },
        type: QueryTypes.INSERT,
      }
    );

    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const boardUpdate = async (req, res) => {
  try {
    const result = await sequelize.query(
      `
        UPDATE Notice_Board 
        SET content = :content, title = :title, fixed = :fixed
        WHERE id = :id
      `,
      {
        replacements: {
          ...req.body,
        },
        type: QueryTypes.UPDATE,
      }
    );
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const boardDelete = async (req, res, id) => {
  try {
    await sequelize.query(
      `
      DELETE FROM Notice_Board
      WHERE id = :id
      `,
      {
        replacements: { id: parseInt(id) },
        type: QueryTypes.DELETE,
      }
    );

    // res.send("test");
    res.send({ status: 200 });
  } catch (error) {
    res.send(error);
  }
};

// export default app;
