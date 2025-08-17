'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function ChooseUsernamePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [handle, setHandle] = useState(searchParams.get('handle') || '');
  const [pic, setPic] = useState("");
  const [bio, setBio] = useState("");
  const [links, setLinks] = useState([{ link: "", text: "" }]);

  const handleLinkChange = (index, field, value) => {
    const newLinks = [...links];
    newLinks[index][field] = value;
    setLinks(newLinks);
  };

  const addEmptyLinkField = () => {
    setLinks([...links, { link: "", text: "" }]);
  };

  const removeLinkField = (index) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks.length > 0 ? newLinks : [{ link: "", text: "" }]);
  };

  const submitAllLinks = async () => {
  let success = false;

  for (let i = 0; i < links.length; i++) {
    const { link, text } = links[i];
    if (link && text && handle) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        links: link,
        linktext: text,
        handle,
        image: pic,
        bio: bio
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      try {
        const response = await fetch("/api/add", requestOptions); // ✅ FIXED
        const result = await response.json();

        if (result.success) {
          success = true;
        } else {
          toast.error(result.message || "Something went wrong!");
        }
      } catch (err) {
        toast.error("Failed to connect to server");
        console.error(err);
      }
    }
  }

  setLinks([{ link: "", text: "" }]);
  return success;
};


  const handleCreateLinktree = async () => {
    if (!handle) {
      toast.error("Please enter a handle!");
      return;
    }

    const success = await submitAllLinks();

    if (success) {
      toast.success("Linktree created!");
      router.push(`/profile/${handle}`);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white"
        >
          <ToastContainer />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full max-w-md space-y-6 bg-white p-6 rounded-xl shadow-md"
          >
            <h1 className="text-3xl font-extrabold tracking-tight">
              <span onClick={() => router.push('/')} className="text-gray-900 cursor-pointer">Linktree</span>
              <span className="text-green-500 ml-1">*</span>
            </h1>

            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-gray-900">Welcome to Linktree!</h2>
              <p className="text-gray-500">Fill the details to create your Linktree.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Handle</label>
                <input
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  type="text"
                  placeholder="Choose a handle"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Bio</label>
                <input
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  type="text"
                  placeholder="Tell us about yourself"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Links</label>
                <div className="space-y-3">
                  {links.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-center gap-2">
                      <input
                        value={item.link}
                        onChange={(e) => handleLinkChange(index, "link", e.target.value)}
                        type="text"
                        placeholder="Enter URL"
                        className="flex-1 mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <input
                        value={item.text}
                        onChange={(e) => handleLinkChange(index, "text", e.target.value)}
                        type="text"
                        placeholder="Enter link text"
                        className="flex-1 mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      {links.length > 1 && (
                        <button
                          onClick={() => removeLinkField(index)}
                          className="text-red-500 hover:text-red-700 text-xl mt-1 px-2"
                          title="Remove this link"
                        >
                          ✖
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addEmptyLinkField}
                    className="bg-gray-100 text-sm border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-200 transition duration-200"
                  >
                    + Add Another
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Profile Image URL</label>
                <input
                  value={pic}
                  onChange={(e) => setPic(e.target.value)}
                  type="text"
                  placeholder="Enter image URL"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <p className="text-xs text-gray-500">
              By continuing, you agree to receive offers, news, and updates from Linktree.
            </p>

            <button
              onClick={handleCreateLinktree}
              className="w-full mb-3 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-200"
            >
              Create your linktree
            </button>

            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link href="/" className="text-purple-600 underline hover:text-purple-800">Go back to login</Link>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 h-[500px] md:h-auto bg-[#6b2dad] text-white flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6 text-center"
          >
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white w-full max-w-sm mx-auto">
                <Image
  src="https://marketplace.canva.com/EAFE1wy_S2U/2/0/450w/canva-5FzODo5SHPU.jpg"
  alt="Preview"
  width={400}
  height={400}
  className="w-full h-auto object-cover"
/>

              </div>
            </div>

            <div className="block lg:hidden">
              <div className="bg-purple-700 p-6 rounded-3xl shadow-lg mx-auto w-full max-w-sm">
                <Image
  src="https://i.pravatar.cc/100?Image=60"
  alt="Avatar"
  width={64}
  height={64}
  className="w-16 h-16 rounded-full mx-auto mb-2"
/>

                <h3 className="text-lg font-semibold text-white">Super Wintendo</h3>
                <p className="text-sm text-purple-300">Streaming every Tuesday</p>
                <div className="mt-4 space-y-2">
                  <button className="w-full py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm">
                    Watch now on Twitch
                  </button>
                  <button className="w-full py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm">
                    Join my Discord
                  </button>
                  <button className="w-full py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm">
                    Playlists
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
