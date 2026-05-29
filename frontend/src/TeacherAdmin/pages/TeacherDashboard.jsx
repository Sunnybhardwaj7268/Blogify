// src/TeacherAdmin/pages/TeacherDashboard.jsx

import React from "react";

import TeacherLayout from "../components/TeacherLayout";

const TeacherDashboard = () => {
    return (
        <TeacherLayout>

            <div>

                <h1 className="text-4xl font-bold text-white">
                    Teacher Dashboard
                </h1>

                <p className="text-zinc-500 mt-3">
                    Manage your teachers and records from here.
                </p>

                {/* Dummy Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

                        <h3 className="text-zinc-400 text-lg">
                            Total Teachers
                        </h3>

                        <h1 className="text-5xl font-bold text-blue-400 mt-4">
                            45
                        </h1>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

                        <h3 className="text-zinc-400 text-lg">
                            Subjects
                        </h3>

                        <h1 className="text-5xl font-bold text-blue-400 mt-4">
                            12
                        </h1>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

                        <h3 className="text-zinc-400 text-lg">
                            Active Teachers
                        </h3>

                        <h1 className="text-5xl font-bold text-blue-400 mt-4">
                            38
                        </h1>
                    </div>
                </div>
            </div>
        </TeacherLayout>
    );
};

export default TeacherDashboard;