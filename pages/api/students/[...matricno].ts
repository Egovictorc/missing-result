// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

import bcrypt from "bcryptjs";
import dbConnect from "../../../db/dbConnect";
import Student from "../../../models/Student";

// types
import { IError, ISuccess, IStudent } from "../../../types";

// extract student type with _id
type TUserResponse = Extract<IStudent, { _id: string }>;

// export interface TSuccess<T> {
//   success: boolean;
//   message?: string | string[];
//   student?: T;
//   users?: T[];
// }

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<ISuccess<IStudent> | IError>
) {
  const {
    query: { matricno },
    method,
    body,
  } = req;

  // declare error type
  let error: IError;

  await dbConnect();

  switch (method) {
    // case "GET" /* Get student */:
    //   // const password = slug[1];
    case "GET":
      try {
        const existingStudent: IStudent | null = await Student.findOne({
          matricno,
        });
        // check if student exists
        if (!existingStudent) {
          return res
            .status(404)
            .json({ success: false, message: "Student does not exist" });
        }
        // authenticate password
        res.status(200).json({ success: true, student: existingStudent });
      } catch (err: any) {
        error = err;
        res.status(500).json({ success: false, message: error.message });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedStudent = await Student.findByIdAndDelete(matricno);
        if (!deletedStudent) {
          return res
            .status(400)
            .json({ success: false, message: "error handling request" });
        }
        res.status(200).json({ success: true, student: deletedStudent });
      } catch (err: any) {
        error = err;
        res.status(500).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "method not allowed" });
      break;
  }
}
