// src/TeacherAdmin/pages/AllTeacher.jsx

import React, { useEffect, useState } from "react";

import TeacherLayout from "../components/TeacherLayout";

import {
    FaEdit,
    FaTrash,
    FaEye,
    FaPlus,
} from "react-icons/fa";

import { useNavigate } from "react-router";

import {
    getAllTeacher,
    deleteSingleTeacherDetails,
} from "../../service/teacher";

import toast from "react-hot-toast";

const AllTeacher = () => {

    const [teacher, setTeacher] = useState([]);

    const navigate = useNavigate();

    const fetchTeacher = async () => {

        try {

            const res = await getAllTeacher();

            setTeacher(res.data.allTeachers);

        } catch (error) {

            toast.error("Something went wrong.");
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTeacher();
    }, []);

    const handleDelete = async (id) => {

        try {

            const res = await deleteSingleTeacherDetails(id);

            toast.success(res.data.message);

            fetchTeacher();

        } catch (error) {

            toast.error("Something went wrong.");
            console.log(error);
        }
    };

    return (
        <TeacherLayout>

            <div>

                {/* Heading */}
                <div className="flex items-center justify-between mb-10">

                    <div>
                        <h1 className="text-4xl font-bold text-white">
                            All Teachers
                        </h1>

                        <p className="text-zinc-500 mt-3">
                            Manage all teachers here.
                        </p>
                    </div>

                    {/* Add Teacher Button */}
                    <button
                        onClick={() => navigate("/teacher-admin/add-teacher")}
                        className="bg-blue-400 hover:bg-blue-300 text-black px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 transition"
                    >
                        <FaPlus />
                        Add Teacher
                    </button>
                </div>

                {/* Teacher Table */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            {/* Table Head */}
                            <thead className="bg-zinc-800">
                                <tr>

                                    <th className="text-left text-white px-5 py-4">
                                        Image
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Name
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Email
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Subject
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Phone
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Gender
                                    </th>

                                    <th className="text-left text-white px-5 py-4">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>

                                {teacher?.map((item) => (

                                    <tr
                                        key={item._id}
                                        className="border-t border-zinc-800 hover:bg-zinc-800/40 transition"
                                    >

                                        {/* Image */}
                                        <td className="px-5 py-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-[90px] h-[60px] rounded-xl object-cover"
                                            />
                                        </td>

                                        {/* Name */}
                                        <td className="px-5 py-4">
                                            <h3 className="text-white font-semibold">
                                                {item.name}
                                            </h3>
                                        </td>

                                        {/* Email */}
                                        <td className="px-5 py-4 text-zinc-300">
                                            {item.email}
                                        </td>

                                        {/* Subject */}
                                        <td className="px-5 py-4">
                                            <span className="bg-blue-400 text-black text-sm px-3 py-1 rounded-full font-medium">
                                                {item.subject}
                                            </span>
                                        </td>

                                        {/* Phone */}
                                        <td className="px-5 py-4 text-zinc-300">
                                            {item.phone}
                                        </td>

                                        {/* Gender */}
                                        <td className="px-5 py-4 text-zinc-400">
                                            {item.gender}
                                        </td>

                                        {/* Actions */}
                                        <td className="px-5 py-4">

                                            <div className="flex items-center gap-3">

                                                {/* View */}
                                                <button
                                                    className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-blue-400 hover:text-black text-white transition flex items-center justify-center"
                                                    onClick={() =>
                                                        navigate(`/teacher-admin/detail-teacher/${item._id}`)
                                                    }
                                                >
                                                    <FaEye />
                                                </button>

                                                {/* Edit */}
                                                <button
                                                    className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-blue-500 hover:text-white text-white transition flex items-center justify-center"
                                                    onClick={() =>
                                                        navigate(`/teacher-admin/edit-teacher/${item._id}`)
                                                    }
                                                >
                                                    <FaEdit />
                                                </button>

                                                {/* Delete */}
                                                <button
                                                    className="w-10 h-10 rounded-xl bg-zinc-800 hover:bg-red-500 hover:text-white text-white transition flex items-center justify-center"
                                                    onClick={() =>
                                                        handleDelete(item._id)
                                                    }
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Empty State */}
                        {teacher.length === 0 && (

                            <div className="py-20 text-center">

                                <h2 className="text-2xl text-zinc-400 font-semibold">
                                    No Teachers Found
                                </h2>

                                <p className="text-zinc-500 mt-3">
                                    Start by adding your first teacher.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </TeacherLayout>
    );
};

export default AllTeacher;