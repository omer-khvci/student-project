import mongoose from "mongoose";
import Students from "@/models/studentModel";
import { dbConnect } from "@/config/db";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const students = await Students.find({});
        res.status(200).json({ success: true, data: students });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    case "POST":
      try {
        const student = await Students.create(req.body);
        res.status(200).json({ success: true, data: student });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
      case "DELETE":
        try {
          const student = await Students.findOneAndDelete(req.body.id);
          res.status(201).json({ success: true, data: student });
        } catch (error) {
          res.status(400).json({ success: false, message: error });
        }
        break;
    default:
      res.status(400).json({ success: false, message: "Invalid method" });
      break;
  }
};
