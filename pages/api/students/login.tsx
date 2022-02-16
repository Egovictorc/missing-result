// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

import bcrypt from "bcryptjs";
import dbConnect from "../../../db/dbConnect";
import Student from "../../../models/Student";

// types
import { IError, ISuccess, IStudent } from "../../../types";

// extract Student type with _id
type TUserResponse =  Extract<IStudent, {_id: string}>

// export interface TSuccess<T> {
//   success: boolean;
//   message?: string | string[];
//   Student?: T;
//   users?: T[];
// }

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<ISuccess<IStudent> | IError>
) {
  const {
    method, body
  } = req;

  // declare error type
  let error: IError;

  await dbConnect();

  switch (method) {
    case "POST" /* Get Student */:
      // existing Student credentials
      const {matricno, password } = body;
      console.log("body ", body)

      try {
        const existingStudent: IStudent | null = await Student.findOne({ matricno });
        // check if Student exists
        if (!existingStudent) {
          return res
            .status(404)
            .json({ success: false, message: "Student does not exist" });
        }
        // authenticate password
        bcrypt
          .compare(password, existingStudent.password)
          .then((isMatch: boolean) => {
            if (!isMatch) {
              return res.status(400).json({
                success: false,
                message: "Invalid username or password",
              });
            }
              // remove password from Student response
            const studentData = {
            ...existingStudent, password: ""
            };
            
            res.status(200).json({ success: true, student: studentData });
          })
          .catch((err: any) => {
            error = err;
            res.status(500).json({ success: false, message: error.message });
          });
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
