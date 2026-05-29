// src/TeacherAdmin/components/TeacherLayout.jsx

import React from "react";

import TeacherSidebar from "./TeacherSidebar";
import TeacherHeader from "./TeacherHeader";

const TeacherLayout = ({ children }) => {
    return (
        <div className="flex bg-zinc-200 min-h-screen">

            {/* Sidebar */}
            <TeacherSidebar />

            {/* Right Content */}
            <div className="flex-1 flex flex-col">

                {/* Header */}
                <TeacherHeader />

                {/* Page Content */}
                <main className="flex-1 p-8 bg-zinc-700">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default TeacherLayout;