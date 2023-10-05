import mongoose from "mongoose";
import Students from "@/models/studentModel";
import { dbConnect } from "@/config/db";
import { useRouter } from "next/router";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { studentId } = req.query;
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const student = await Students.findById(studentId);
        res.status(200).json({ success: true, data: student });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    case "PUT":
      try {
        const student = await Students.findByIdAndUpdate(
          { _id: studentId },
          { ...req.body }
        );
        res.status(200).json({ success: true, data: student });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    default:
      break;
  }
};