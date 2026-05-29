// src/TeacherAdmin/pages/AddTeacher.jsx

import React, { useState } from "react";

import TeacherLayout from "../components/TeacherLayout";

import { addTeacher } from "../../service/teacher";

import toast from "react-hot-toast";

import { useNavigate } from "react-router";

const AddTeacher = () => {

    // States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();

    // Submit Handler
    const handleSubmit = async (e) => {

        e.preventDefault();

        // Prepare Data
        const teacherData = {
            name,
            email,
            subject,
            phone,
            image,
            gender,
            address,
        };

        try {

            const res = await addTeacher(teacherData);

            toast.success(res.data.message);

            // Reset Form
            setName("");
            setEmail("");
            setSubject("");
            setPhone("");
            setImage("");
            setGender("");
            setAddress("");

            navigate('/teacher-admin/all-teachers');

        } catch (error) {

            toast.error("Something went wrong.");
            console.log(error);
        }
    };

    return (
        <TeacherLayout>

            <div>

                {/* Heading */}
                <div className="mb-10">

                    <h1 className="text-4xl font-bold text-white">
                        Add New Teacher
                    </h1>

                    <p className="text-zinc-500 mt-3">
                        Create and add a new teacher.
                    </p>
                </div>

                {/* Form */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6"
                    >

                        {/* Teacher Name */}
                        <div>
                            <label className="text-white block mb-2 font-medium">
                                Teacher Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter teacher name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-400"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-white block mb-2 font-medium">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-400"
                            />
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="text-white block mb-2 font-medium">
                                Teacher Image URL
                            </label>

                            <input
                                type="text"
                                placeholder="Paste image URL"
                                value={image}
                                onChange={(e) =>
                                    setImage(e.target.value)
                                }
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-400"
                            />
                        </div>

                        {/* Image Preview */}
                        {image && (
                            <div className="w-full h-[300px] rounded-3xl overflow-hidden border border-zinc-800">
                                <img
                                    src={image}
                                    alt="preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Grid Fields */}
                        <div className="grid md:grid-cols-2 gap-6">

                            {/* Subject */}
                            <div>
                                <label className="text-white block mb-2 font-medium">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    value={subject}
                                    onChange={(e) =>
                                        setSubject(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-400"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="text-white block mb-2 font-medium">
                                    Phone
                                </label>

                                <input
                                    type="number"
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-400"
                                />
                            </div>

                            {/* Gender */}
                            <div>
                                <label className="text-white block mb-2 font-medium">
                                    Gender
                                </label>

                                <select
                                    value={gender}
                                    onChange={(e) =>
                                        setGender(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-400"
                                >
                                    <option value="">
                                        Select Gender
                                    </option>

                                    <option value="Male">
                                        Male
                                    </option>

                                    <option value="Female">
                                        Female
                                    </option>
                                </select>
                            </div>

                            {/* Address */}
                            <div>
                                <label className="text-white block mb-2 font-medium">
                                    Address
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter address"
                                    value={address}
                                    onChange={(e) =>
                                        setAddress(e.target.value)
                                    }
                                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-400"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4 pt-4">

                            <button
                                type="submit"
                                className="bg-blue-400 hover:bg-blue-300 text-black px-8 py-4 rounded-2xl font-semibold transition"
                            >
                                Add Teacher
                            </button>

                            <button
                                type="button"
                                className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-2xl font-semibold transition"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </TeacherLayout>
    );
};

export default AddTeacher;