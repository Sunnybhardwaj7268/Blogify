// src/TeacherAdmin/pages/TeacherDetail.jsx

import React, { useEffect, useState } from "react";

import TeacherLayout from "../components/TeacherLayout";

import { useParams } from "react-router";

import toast from "react-hot-toast";

import { getSingleTeacherDetails } from "../../service/teacher";

const TeacherDetail = () => {

    const [teacher, setTeacher] = useState({});

    const { id } = useParams();

    const fetchTeacherDetails = async (id) => {

        try {

            const res = await getSingleTeacherDetails(id);

            setTeacher(res.data.teacherDetails);

        } catch (error) {

            toast.error("Something went wrong.");
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTeacherDetails(id);
    }, []);

    return (
        <TeacherLayout>

            <div className="max-w-6xl mx-auto">

                <div className="mb-10">

                    <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-[500px] object-cover rounded-3xl"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6">

                    <span className="bg-blue-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                        {teacher.subject}
                    </span>

                    <span className="text-zinc-400">
                        {teacher.gender}
                    </span>

                    <span className="text-zinc-500">
                        {teacher.phone}
                    </span>
                </div>

                <h1 className="text-5xl font-bold text-white leading-tight mb-6">
                    {teacher.name}
                </h1>

                <p className="text-xl text-zinc-400 leading-9 mb-10">
                    {teacher.email}
                </p>

                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    <p className="text-zinc-300 leading-9 text-lg whitespace-pre-line">
                        {teacher.address}
                    </p>
                </div>
            </div>
        </TeacherLayout>
    );
};

export default TeacherDetail;