// src/pages/BlogDetailesPage.jsx

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
    FaCalendarAlt,
    FaUser,
    FaArrowRight,
} from "react-icons/fa";

const relatedBlogs = [
    {
        id: 1,
        title: "Learn React Step By Step",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },

    {
        id: 2,
        title: "Master Tailwind CSS",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },

    {
        id: 3,
        title: "Understanding MongoDB",
        image:
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },

    {
        id: 4,
        title: "Frontend Developer Roadmap",
        image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
];

const BlogDetailesPage = () => {
    return (
        <div className="bg-black min-h-screen">

            <Header />

            {/* Main Blog Section */}
            <section className="max-w-5xl mx-auto px-5 py-14">

                {/* Thumbnail */}
                <div className="w-full h-[250px] md:h-[450px] rounded-3xl overflow-hidden border border-zinc-800">
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                        alt="blog"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Blog Info */}
                <div className="mt-8">

                    <div className="flex flex-wrap items-center gap-6 text-zinc-400 text-sm mb-5">

                        <div className="flex items-center gap-2">
                            <FaUser />
                            <span>Admin</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaCalendarAlt />
                            <span>25 May 2026</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        How To Become A Modern React Developer In 2026
                    </h1>

                    {/* Description */}
                    <p className="text-zinc-400 leading-8 mt-6">
                        React is one of the most powerful frontend libraries
                        used for building modern and scalable web applications.
                        In this article, we will explore complete roadmap,
                        important skills, tools, and best practices to become
                        a professional React developer.
                    </p>

                    <p className="text-zinc-400 leading-8 mt-5">
                        You should start with understanding HTML, CSS, and
                        JavaScript fundamentals. After that, learn React
                        concepts such as components, props, state management,
                        hooks, routing, API handling, and reusable UI
                        structures.
                    </p>

                    <p className="text-zinc-400 leading-8 mt-5">
                        Once your basics are strong, you can move towards
                        advanced concepts like context API, performance
                        optimization, authentication systems, backend
                        integration, and deployment strategies.
                    </p>

                    {/* Quote */}
                    <div className="mt-8 bg-zinc-900 border-l-4 border-yellow-400 p-6 rounded-2xl">
                        <p className="text-zinc-300 text-lg italic leading-8">
                            “Consistency and project building are the fastest
                            ways to master React development.”
                        </p>
                    </div>

                    {/* More Content */}
                    <h2 className="text-3xl font-bold text-white mt-12 mb-5">
                        Why React Is Popular?
                    </h2>

                    <p className="text-zinc-400 leading-8">
                        React provides component-based architecture which
                        makes UI development faster and reusable. It is also
                        highly scalable and supported by a huge developer
                        community worldwide.
                    </p>

                    <p className="text-zinc-400 leading-8 mt-5">
                        Companies prefer React because it improves developer
                        productivity and provides excellent performance for
                        large-scale applications.
                    </p>
                </div>
            </section>

            {/* Related Blogs */}
            <section className="max-w-7xl mx-auto px-5 pb-16">

                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold text-white">
                        Related Blogs
                    </h2>

                    <button className="text-yellow-400 hover:text-yellow-300 transition">
                        View All
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
                    {relatedBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
                        >

                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-52 object-cover"
                            />

                            <div className="p-5">
                                <h3 className="text-white text-lg font-semibold leading-7">
                                    {blog.title}
                                </h3>

                                <button className="mt-5 text-yellow-400 hover:text-yellow-300 transition inline-flex items-center gap-2">
                                    Read More
                                    <FaArrowRight className="text-sm" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogDetailesPage;