// src/StudentAdmin/pages/StudentDetail.jsx

import React, { useEffect, useState } from "react";

import StudentLayout from "../components/StudentLayout";

import { useParams } from "react-router";

import toast from "react-hot-toast";

import { getSingleStudentDetails } from "../../service/student";

const StudentDetail = () => {

    const [student, setStudent] = useState({});

    const { id } = useParams();

    const fetchStudentDetails = async (id) => {

        try {

            const res = await getSingleStudentDetails(id);

            setStudent(res.data.studentDetails);

        } catch (error) {

            toast.error("Something went wrong.");
            console.log(error);
        }
    };

    useEffect(() => {
        fetchStudentDetails(id);
    }, []);

    return (
        <StudentLayout>

            <div className="max-w-6xl mx-auto">

                <div className="mb-10">

                    <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-[500px] object-cover rounded-3xl"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6">

                    <span className="bg-green-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                        {student.course}
                    </span>

                    <span className="text-zinc-400">
                        {student.gender}
                    </span>

                    <span className="text-zinc-500">
                        {student.phone}
                    </span>
                </div>

                <h1 className="text-5xl font-bold text-white leading-tight mb-6">
                    {student.name}
                </h1>

                <p className="text-xl text-zinc-400 leading-9 mb-10">
                    {student.email}
                </p>

                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    <p className="text-zinc-300 leading-9 text-lg whitespace-pre-line">
                        {student.address}
                    </p>
                </div>
            </div>
        </StudentLayout>
    );
};

export default StudentDetail;