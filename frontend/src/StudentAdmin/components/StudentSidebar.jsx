// src/StudentAdmin/components/StudentSidebar.jsx

import React from "react";

import {
    FaTachometerAlt,
    FaUserGraduate,
    FaPlus,
    FaSignOutAlt,
} from "react-icons/fa";

import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router";

const StudentSidebar = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const menuItems = [
        {
            key: "/student-admin/dashboard",
            icon: <FaTachometerAlt />,
            label: "Dashboard",
        },

        {
            key: "/student-admin/all-students",
            icon: <FaUserGraduate />,
            label: "All Students",
        },

        {
            key: "/student-admin/add-student",
            icon: <FaPlus />,
            label: "Add Student",
        },
    ];

    return (
        <aside className="w-[270px] min-h-screen bg-zinc-900 border-r border-zinc-800 flex flex-col justify-between">

            {/* Top */}
            <div>

                {/* Logo */}
                <div className="p-6 border-b border-zinc-800">
                    <h1 className="text-3xl font-bold text-green-400">
                        StudentHub
                    </h1>

                    <p className="text-zinc-500 mt-1 text-sm">
                        Student Admin
                    </p>
                </div>

                {/* Menu */}
                <div className="p-4">

                    <Menu
                        mode="inline"
                        selectedKeys={[location.pathname]}
                        items={menuItems}
                        onClick={({ key }) => navigate(key)}
                        className="custom-sidebar-menu"
                    />
                </div>
            </div>

            {/* Logout */}
            <div className="p-4 border-t border-zinc-800">
                <button className="w-full flex items-center gap-3 text-red-400 hover:bg-red-500 hover:text-white px-4 py-3 rounded-2xl transition font-semibold">
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default StudentSidebar;