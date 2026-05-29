// src/StudentAdmin/pages/StudentDashboard.jsx

import React from "react";

import StudentLayout from "../components/StudentLayout";

const StudentDashboard = () => {
    return (
        <StudentLayout>

            <div>

                <h1 className="text-4xl font-bold text-white">
                    Student Dashboard
                </h1>

                <p className="text-zinc-500 mt-3">
                    Manage your students and records from here.
                </p>

                {/* Dummy Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

                        <h3 className="text-zinc-400 text-lg">
                            Total Students
                        </h3>

                        <h1 className="text-5xl font-bold text-green-400 mt-4">
                            120
                        </h1>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

                        <h3 className="text-zinc-400 text-lg">
                            Courses
                        </h3>

                        <h1 className="text-5xl font-bold text-green-400 mt-4">
                            8
                        </h1>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

                        <h3 className="text-zinc-400 text-lg">
                            Active Students
                        </h3>

                        <h1 className="text-5xl font-bold text-green-400 mt-4">
                            95
                        </h1>
                    </div>
                </div>
            </div>
        </StudentLayout>
    );
};

export default StudentDashboard;