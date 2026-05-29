// src/StudentAdmin/components/StudentLayout.jsx

import React from "react";
import StudentSidebar from "./StudentSidebar";
import StudentHeader from "./StudentHeader";


const StudentLayout = ({ children }) => {
    return (
        <div className="flex bg-zinc-200 min-h-screen">

            {/* Sidebar */}
            <StudentSidebar />

            {/* Right Content */}
            <div className="flex-1 flex flex-col">

                {/* Header */}
                <StudentHeader />

                {/* Page Content */}
                <main className="flex-1 p-8 bg-zinc-700">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default StudentLayout;