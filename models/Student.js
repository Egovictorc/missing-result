import mongoose from "mongoose";
const Schema = mongoose.Schema;
import ComplaintSchema from "./Complaint"

const StudentSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Student already exists"],
      trim: true,
    },
    matricno: {
      type: String,
      required: [true, "Matricno is required"],
      unique: [true, "Student already exists"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minLength: [7, "Password length should be up to 7"],
    },
    // complaints: [
    //   ComplaintSchema
    // ]
    // registration_date: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

// The {timestamps: true} option creates a createdAt and updatedAt field on our models that contain timestamps which will get automatically updated when our model changes.


export default mongoose.models.Student || mongoose.model("Student", StudentSchema);
