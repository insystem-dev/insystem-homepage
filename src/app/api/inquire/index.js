import formidable from "formidable";
import { rename } from "fs";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export async function handler(req, res) {
  try {
    if (req.method === "POST") await sendMail(req, res);
    else res.json({ status: 500, message: "method가 없습니다." });
  } catch (err) {
    console.log(err);
    res.json({ status: 500, message: "error" });
  }
}

async function sendMail(req, res) {
  const { mail, fileList } = await parseFormdataPromise(req);

  const attachments = fileList.map((cur) => {
    return {
      filename: cur.originalFilename,
      path: `${process.cwd()}/public/mail/${cur.newfileName}`,
    };
  });

  let transporter = nodemailer.createTransport({
    host: "smtps.hiworks.com",
    port: 465,
    secure: true, // use SSL

    auth: {
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${mail.company}"  <${mail.email}>`,
    to: "dev01@insystem.kr",
    subject: mail.title,
    text: `
          문의유형: ${mail.intype}

          ${mail.textInput}

          참고사이트 1: ${mail.reference01}
          참고사이트 2: ${mail.reference02}

          ------------------------------------------
          ${mail.company}

          담당자: ${mail.incharge}
          전화번호: ${mail.phone}
    `,
    attachments,
  });

  res.json({ status: 200, message: "ok" });
}

// formData 값 받아오기
const parseFormdataPromise = (req) => {
  const form = new formidable.IncomingForm();
  form.encoding = "utf-8";
  form.multiples = true;
  form.keepExtentions = true;

  const fileList = [];

  form
    .on("field", (field, value) => {})
    .on("file", (field, value) => {
      const newfileName = `${Date.now()}${value.originalFilename}`;
      rename(
        value.filepath,
        `${process.cwd()}/public/mail/${newfileName}`,
        (err) => {
          if (err) console.log(err);
        }
      );

      fileList.push({
        newfileName: newfileName,
        originalFilename: value.originalFilename,
      });
    })
    .on("error", (err) => {
      console.log("error", err);
    });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, field, file) => {
      if (err) reject(err);
      resolve({ mail: JSON.parse(field.mail), fileList });
    });
  });
};

export default handler;
