'use client';

import React, { useState } from 'react';
import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

const UpdateProfile = () => {
    const [name, setName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data, error } = await authClient.user.update({
                name: name || undefined,
                image: photoUrl || undefined,
            });

            if (error) {
                toast.error(error.message || "Update Faild");
            } else {
                toast.success("Updated Successfuly");
                setName("");
                setPhotoUrl("");
            }


        } catch (err) {
            console.error(err);
            toast.error("Update Faild");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-[#0A192F] rounded-xl text-white shadow-xl border border-slate-800">
            <h2 className="text-xl font-bold mb-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                Update Profile Info
            </h2>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div>
                    <label className="block mb-1 text-sm text-slate-300">New Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-pink-500 transition-all"
                        placeholder="Name"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-sm text-slate-300">New Photo URL</label>
                    <input
                        type="text"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        className="w-full p-3 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-pink-500 transition-all"
                        placeholder="New URL"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 py-3 rounded-lg font-bold disabled:opacity-50 transition-all mt-2"
                >
                    {loading ? "Updating..." : "Save Changes"}
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
