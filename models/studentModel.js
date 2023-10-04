import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    fullname : {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
},{timestamps:true})

mongoose.models = {}

const Students = mongoose.model("Student",studentSchema)
export default Students;