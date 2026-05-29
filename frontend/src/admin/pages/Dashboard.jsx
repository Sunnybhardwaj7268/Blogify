// src/admin/pages/Dashboard.jsx

import React from "react";
import Layout from "../components/Layout";

const Dashboard = () => {
    return (
        <Layout>
            <div>

                <h1 className="text-4xl font-bold text-white">
                    Dashboard
                </h1>

                <p className="text-zinc-500 mt-3">
                    Manage your blogs and content from here.
                </p>

                {/* Dummy Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
                        <h3 className="text-zinc-400 text-lg">
                            Total Blogs
                        </h3>

                        <h1 className="text-5xl font-bold text-yellow-400 mt-4">
                            24
                        </h1>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
                        <h3 className="text-zinc-400 text-lg">
                            Categories
                        </h3>

                        <h1 className="text-5xl font-bold text-yellow-400 mt-4">
                            8
                        </h1>
                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
                        <h3 className="text-zinc-400 text-lg">
                            Total Likes
                        </h3>

                        <h1 className="text-5xl font-bold text-yellow-400 mt-4">
                            1.2K
                        </h1>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;