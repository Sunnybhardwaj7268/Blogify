import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';

import BlogModel from './models/blog.model.js';
import StudentModel from './models/student.model.js';
import TeacherModel from './models/teacher.model.js';

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// ----- PORT -----
const port = 3000

// ----- CONNECT DB FUNCTION -----
const connectDB = async () => {
    try {

        await mongoose.connect('mongodb+srv://bhardwajsunny9140_db_user:zJboZOp3oCnwnidf@blogifycluster.jumtsra.mongodb.net/blogify')

        console.log("MongoDB connected. 🥳")

    } catch (error) {

        console.log("MongoDB not connected");
    }
}

connectDB()


// ----- HOME ROUTE -----
app.get('/', (req, res) => {
    res.send('Welcome to blogify')
})


// =========================================================
// BLOG API
// =========================================================

// ----- ADD BLOG -----
app.post('/addblog', async (req, res) => {
    try {

        let {
            title,
            shortDescription,
            longDescription,
            image,
            date,
            author,
            category,
            tags
        } = req.body

        let newBlog = await BlogModel.create({
            title,
            shortDescription,
            longDescription,
            image,
            date,
            author,
            category,
            tags
        })

        if (!newBlog) {
            res.status(500).json({
                success: false,
                message: "Blog Not Added"
            })
        }

        res.status(200).json({
            success: true,
            message: "Blog Added Successfully",
            newBlog
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Add Blog API Error",
            error
        })
    }
})


// ----- ALL BLOG -----
app.get('/allblog', async (req, res) => {
    try {

        let allBlogs = await BlogModel.find()

        let blogCount = await BlogModel.find().countDocuments()

        res.status(200).json({
            success: true,
            message: "Blog Fetched Successfully",
            blogCount,
            allBlogs
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "All Blog API Error",
            error
        })
    }
})


// ----- FETCH BLOG VIA ID -----
app.get('/getblogbyid/:id', async (req, res) => {
    try {

        const { id } = req.params

        let blogDetails = await BlogModel.findOne({ _id: id })

        res.status(200).json({
            success: true,
            message: "Blog Fetched Successfully",
            blogDetails
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Single Blog Fetch API Error",
            error
        })
    }
})


// ----- EDIT BLOG -----
app.patch('/editblog/:id', async (req, res) => {
    try {

        let {
            title,
            shortDescription,
            longDescription,
            image,
            date,
            author,
            category,
            tags
        } = req.body

        const { id } = req.params

        let updatedBlog = await BlogModel.findOneAndUpdate(
            { _id: id },
            {
                title,
                shortDescription,
                longDescription,
                image,
                date,
                author,
                category,
                tags
            },
            { new: true }
        )

        if (!updatedBlog) {
            res.status(500).json({
                success: false,
                message: "Blog Not Updated"
            })
        }

        res.status(200).json({
            success: true,
            message: "Blog Updated Successfully",
            updatedBlog
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Update Blog API Error",
            error
        })
    }
})


// ----- DELETE BLOG -----
app.delete('/deleteblog/:id', async (req, res) => {
    try {

        const { id } = req.params

        let deletedBlog = await BlogModel.findByIdAndDelete(id)

        if (!deletedBlog) {
            return res.status(404).json({
                success: false,
                message: "Blog Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Blog Deleted Successfully",
            deletedBlog
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Delete Blog API Error",
            error
        })
    }
})


// =========================================================
// STUDENT API
// =========================================================

// ----- ADD STUDENT -----
app.post('/addstudent', async (req, res) => {
    try {

        let {
            name,
            email,
            course,
            phone,
            image,
            gender,
            address
        } = req.body

        let newStudent = await StudentModel.create({
            name,
            email,
            course,
            phone,
            image,
            gender,
            address
        })

        if (!newStudent) {
            res.status(500).json({
                success: false,
                message: "Student Not Added"
            })
        }

        res.status(200).json({
            success: true,
            message: "Student Added Successfully",
            newStudent
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Add Student API Error",
            error
        })
    }
})


// ----- ALL STUDENT -----
app.get('/allstudent', async (req, res) => {
    try {

        let allStudents = await StudentModel.find()

        let studentCount = await StudentModel.find().countDocuments()

        res.status(200).json({
            success: true,
            message: "Student Fetched Successfully",
            studentCount,
            allStudents
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "All Student API Error",
            error
        })
    }
})


// ----- FETCH STUDENT VIA ID -----
app.get('/getstudentbyid/:id', async (req, res) => {
    try {

        const { id } = req.params

        let studentDetails = await StudentModel.findOne({ _id: id })

        res.status(200).json({
            success: true,
            message: "Student Fetched Successfully",
            studentDetails
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Single Student Fetch API Error",
            error
        })
    }
})


// ----- EDIT STUDENT -----
app.patch('/editstudent/:id', async (req, res) => {
    try {

        let {
            name,
            email,
            course,
            phone,
            image,
            gender,
            address
        } = req.body

        const { id } = req.params

        let updatedStudent = await StudentModel.findOneAndUpdate(
            { _id: id },
            {
                name,
                email,
                course,
                phone,
                image,
                gender,
                address
            },
            { new: true }
        )

        if (!updatedStudent) {
            res.status(500).json({
                success: false,
                message: "Student Not Updated"
            })
        }

        res.status(200).json({
            success: true,
            message: "Student Updated Successfully",
            updatedStudent
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Update Student API Error",
            error
        })
    }
})


// ----- DELETE STUDENT -----
app.delete('/deletestudent/:id', async (req, res) => {
    try {

        const { id } = req.params

        let deletedStudent = await StudentModel.findByIdAndDelete(id)

        if (!deletedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Student Deleted Successfully",
            deletedStudent
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Delete Student API Error",
            error
        })
    }
})


// =========================================================
// TEACHER API
// =========================================================

// ----- ADD TEACHER -----
app.post('/addteacher', async (req, res) => {
    try {

        let {
            name,
            email,
            subject,
            phone,
            image,
            gender,
            address
        } = req.body

        let newTeacher = await TeacherModel.create({
            name,
            email,
            subject,
            phone,
            image,
            gender,
            address
        })

        if (!newTeacher) {
            res.status(500).json({
                success: false,
                message: "Teacher Not Added"
            })
        }

        res.status(200).json({
            success: true,
            message: "Teacher Added Successfully",
            newTeacher
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Add Teacher API Error",
            error
        })
    }
})


// ----- ALL TEACHER -----
app.get('/allteacher', async (req, res) => {
    try {

        let allTeachers = await TeacherModel.find()

        let teacherCount = await TeacherModel.find().countDocuments()

        res.status(200).json({
            success: true,
            message: "Teacher Fetched Successfully",
            teacherCount,
            allTeachers
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "All Teacher API Error",
            error
        })
    }
})


// ----- FETCH TEACHER VIA ID -----
app.get('/getteacherbyid/:id', async (req, res) => {
    try {

        const { id } = req.params

        let teacherDetails = await TeacherModel.findOne({ _id: id })

        res.status(200).json({
            success: true,
            message: "Teacher Fetched Successfully",
            teacherDetails
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Single Teacher Fetch API Error",
            error
        })
    }
})


// ----- EDIT TEACHER -----
app.patch('/editteacher/:id', async (req, res) => {
    try {

        let {
            name,
            email,
            subject,
            phone,
            image,
            gender,
            address
        } = req.body

        const { id } = req.params

        let updatedTeacher = await TeacherModel.findOneAndUpdate(
            { _id: id },
            {
                name,
                email,
                subject,
                phone,
                image,
                gender,
                address
            },
            { new: true }
        )

        if (!updatedTeacher) {
            res.status(500).json({
                success: false,
                message: "Teacher Not Updated"
            })
        }

        res.status(200).json({
            success: true,
            message: "Teacher Updated Successfully",
            updatedTeacher
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Update Teacher API Error",
            error
        })
    }
})


// ----- DELETE TEACHER -----
app.delete('/deleteteacher/:id', async (req, res) => {
    try {

        const { id } = req.params

        let deletedTeacher = await TeacherModel.findByIdAndDelete(id)

        if (!deletedTeacher) {
            return res.status(404).json({
                success: false,
                message: "Teacher Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Teacher Deleted Successfully",
            deletedTeacher
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Delete Teacher API Error",
            error
        })
    }
})


// ----- SERVER -----
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})