import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import { getSingleBlogDetails } from "../../service/blog";

const BlogDetail = () => {

    const [blog, setBlog] = useState({})

    const { id } = useParams()

    const fetchBlogDetails = async(id) => {

        try {

            const res = await getSingleBlogDetails(id)

            setBlog(res.data.blogDetails)

        } catch (error) {

            toast.error("Something went wrong.")
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBlogDetails(id)
    }, [])

    return (
        <Layout>

            <div className="max-w-6xl mx-auto">

                <div className="mb-10">

                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-[500px] object-cover rounded-3xl"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6">

                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                        {blog.category}
                    </span>

                    <span className="text-zinc-400">
                        By {blog.author}
                    </span>

                    <span className="text-zinc-500">
                        {new Date(blog.date).toLocaleDateString()}
                    </span>
                </div>

                <h1 className="text-5xl font-bold text-white leading-tight mb-6">
                    {blog.title}
                </h1>

                <p className="text-xl text-zinc-400 leading-9 mb-10">
                    {blog.shortDescription}
                </p>

                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    <p className="text-zinc-300 leading-9 text-lg whitespace-pre-line">
                        {blog.longDescription}
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-10">

                    {blog.tags?.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-zinc-800 text-zinc-300 px-4 py-2 rounded-full text-sm"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default BlogDetail;