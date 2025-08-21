'use client';
import Navbar from '@/components/Navbar';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  const router = useRouter()
  const images = ['person1.png', 'person3.png', 'person2.png', 'person4.png'];
  const [index, setIndex] = useState(0);
  const [change, setChange] = useState(0)
  const [text, setText] = useState("");

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const isSection1InView = useInView(section1Ref, { once: true });
  const isSection2InView = useInView(section2Ref, { once: true });

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  const handleChange = () => {
    setChange((prev) => (prev + 1) % images.length);
  };

  const route = () => {
    router.push('/generate')
  }

  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }
  return (
    <>
      <Navbar />
      <main>
        {/* Section 1 */}
        <motion.section
          ref={section1Ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isSection1InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="min-h-screen bg-[#254f1a] grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 pt-28 pb-16 gap-10"
        >
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-[#d2e823] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-extrabold leading-tight mb-4">
              Everything you are. In one, simple link in bio.
            </h1>
            <p className="text-white font-medium text-[16px] sm:text-[18px] lg:text-[20px] mb-6">
              Join 70M+ people using Linktree for their link in bio. One link to help
              you share everything you create, curate and sell from your social profiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="bg-white px-4 py-5 rounded-md w-full"
                type="text"
                placeholder="Enter your handle"
              />
              <button onClick={() => createTree()} className="bg-[#e9c0e9] w-full px-6 py-3 rounded-full font-semibold text-[#1e2330]">
                Claim your Linktree
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={`/${images[index]}`}
              alt={`Persona ${index + 1}`}
              onClick={handleClick}
              width={300}
              height={400}
              className="rounded-3xl w-[260px] sm:w-[300px] lg:w-[320px] hover:scale-105 transition-transform duration-300 cursor-pointer"
            />

          </div>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          ref={section2Ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isSection2InView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="min-h-screen bg-[#e9c0e9] grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 py-20 gap-10"
        >
          <div className="flex justify-center items-center">
            <Image
              src={`/${images[change]}`}
              alt={`Persona ${change + 1}`}
              onClick={handleChange}
              width={300}
              height={400}
              className="rounded-3xl w-[260px] sm:w-[300px] lg:w-[320px] hover:scale-105 transition-transform duration-300 cursor-pointer"
            />

          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-[#502274] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-extrabold leading-tight mb-4">
              Create and customize your Linktree in minutes
            </h1>
            <p className="text-[#1e2330] font-medium text-[16px] sm:text-[18px] lg:text-[20px] mb-6">
              Connect your social media, website, store, videos, podcasts and more. Everything in a single link.
            </p>
            <button onClick={route} className="bg-[#502274] text-white px-6 py-4 rounded-full font-semibold">
              Get started for free
            </button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
