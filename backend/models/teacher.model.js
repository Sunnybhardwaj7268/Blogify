// models/teacher.model.js

import mongoose from "mongoose";

const { Schema } = mongoose;

const teacherSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
        },

        subject: {
            type: String,
            required: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        image: {
            type: String,
            required: true,
            trim: true,
        },

        gender: {
            type: String,
            required: true,
            enum: ["Male", "Female"],
        },

        address: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const TeacherModel = mongoose.model("Teacher", teacherSchema);

export default TeacherModel;