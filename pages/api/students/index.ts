import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../db/dbConnect";
import Student from "../../../models/Student";
import bcrypt from "bcryptjs";
import { IError, ISuccess, IStudent} from "../../../types";

// const bcrypt = require("bcryptjs");

// @route GET/POST
// @desc Get all users
// @desc create new user
type TUserResponse =  Extract<IStudent, {_id: string}>

export default async function Handler(req: NextApiRequest,
  res: NextApiResponse<ISuccess<IStudent>>) {
  const { method } = req;
  // declare error type
  let error: IError; 

  await dbConnect();

  switch (method) {
    // @desc Get all users
    case "GET":
      try {
        /* get all the users in our database */
        const students: IStudent[] = await Student.find({}).select({"password": 0}).sort({
          createdAt: -1,
        }); 
        res.status(200).json({ success: true, students });
      } catch (err: any) {
        error = err;
        res
          .status(500)
          .json({ success: false, message: error.message });
      }
      break;

    case "POST":
      // @desc create new user
      try {
        const { email, password } = req.body;
        console.log("bodey ", req.body)
        // check if user exists
        const existingStudent: IStudent | null = await Student.findOne({ email });
        console.log("existingStudent ", existingStudent )

        if (existingStudent) {
          return res
            .status(400)
            .json({ success: false, message: "Student already exists" });
        }
        const studentCount =  await Student.countDocuments()  //check number of students
        const currentYear = new Date().getFullYear()
        const nextCount = studentCount + 1 //get matricno for new student as current year + 1
       
        // create Student instance
        const newStudent = new Student({
          matricno: currentYear+ ""+ nextCount,
          password,
          email
        });

        // encrypt Student password
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(newStudent.password, salt, (error, hash) => {
            if (error) {
              throw err;
            } else {
              newStudent.password = hash;

              newStudent.save().then((student: IStudent) => {
                // remove password from student response
                const studentData = { ...student, password: "" };

              res.status(201).json({
                  success: true,
                  student: studentData,
                });
              });
            }
          });
        });
  
      } catch (err: any) {
        error = err;
          return res.status(500).json({ success: false, message: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: "method not allowed" });
      break;
  }
}
