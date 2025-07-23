'use client'
import {
  FaApple,
  FaGooglePlay,
  FaTiktok,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const router =  useRouter();
  const route =()=>{
    router.push('/generate')
  }
  return (
    <div className="bg-[#4a1d84] overflow-hidden">
      {/* Jumpstart Section */}
      <section className="text-center py-20 px-4 relative">
        {/* Left Silhouette */}
        <div className="absolute left-0 top-0 h-full w-full max-w-[300px] sm:max-w-[500px]">
          <Image
  src="/p1.svg"
  alt="Silhouette"
  width={300}
  height={300}
  className="h-full w-full absolute"
/>

        </div>

        {/* Right Flower */}
        <div className="absolute right-0 top-0 h-full w-full max-w-[200px] sm:max-w-[300px] hidden md:block">
          <Image
  src="/flower.svg"
  alt="Decorative Flower"
  fill
  className="object-contain"
/>

        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-4">
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] text-pink-200 font-extrabold leading-tight mb-10">
            Jumpstart your corner <br /> of the internet today
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <input
              type="text"
              placeholder="linktr.ee/"
              className="px-6 py-4 bg-white rounded-lg text-gray-800 text-lg w-full sm:w-[300px] focus:outline-none"
            />
            <button onClick={route} className="bg-lime-300 hover:bg-lime-400 px-6 py-4 rounded-full text-black font-semibold text-lg w-full sm:w-auto">
              Claim your Linktree
            </button>
          </div>
        </div>
      </section>

      {/* Footer Main Section */}
      <footer className="bg-white w-[90%] mx-auto text-black rounded-xl pt-12 pb-6 px-4 md:px-10 lg:px-20">
        {/* Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-300 pb-10">
          {/* Company */}
          <div>
            <h3 className="font-bold text-2xl mb-4">Company</h3>
            <ul className="space-y-4 mt-8 text-sm text-gray-500">
              <li>The Linktree Blog</li>
              <li>Engineering Blog</li>
              <li>Marketplace</li>
              <li>What's New</li>
              <li>About</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Link in Bio</li>
              <li>Social Good</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-bold text-2xl mb-4">Community</h3>
            <ul className="space-y-4 mt-8 text-sm text-gray-500">
              <li>Linktree for Enterprise</li>
              <li>2023 Creator Report</li>
              <li>2022 Creator Report</li>
              <li>Charities</li>
              <li>What's Trending</li>
              <li>Creator Profile Directory</li>
              <li>Explore Templates</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-2xl mb-4">Support</h3>
            <ul className="space-y-4 mt-8 text-sm text-gray-500">
              <li>Help Topics</li>
              <li>Getting Started</li>
              <li>Linktree Pro</li>
              <li>Features & How-Tos</li>
              <li>FAQs</li>
              <li>Report a Violation</li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div>
            <h3 className="font-bold text-2xl mb-4">Trust & Legal</h3>
            <ul className="space-y-4 mt-8 text-sm text-gray-500">
              <li>Terms & Conditions</li>
              <li>Privacy Notice</li>
              <li>Cookie Notice</li>
              <li>Trust Center</li>
              <li>Cookie Preferences</li>
              <li>Transparency Report</li>
              <li>Law Enforcement Access Policy</li>
            </ul>
          </div>
        </div>

        {/* Buttons and Social Icons */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-6 gap-6">
          {/* Buttons */}
          <div className="flex gap-2 flex-wrap justify-center">
            <button className="bg-gray-100 hover:bg-gray-200 px-6 py-4 rounded-md text-sm font-medium">
              Log in
            </button>
            <button onClick={route} className="bg-lime-300 hover:bg-lime-400 px-6 py-3 rounded-full text-sm font-medium">
              Get started for free
            </button>
          </div>

          {/* App Store */}
          <div className="flex gap-2">
            <button className="bg-black text-white px-4 py-2 rounded-md text-xs flex items-center gap-2">
              <FaApple /> App Store
            </button>
            <button className="bg-black text-white px-6 py-4 rounded-md text-xs flex items-center gap-2">
              <FaGooglePlay /> Google Play
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-5">
            <div className="flex  bg-black py-2 px-2 text-white rounded-4xl text-xl justify-center ">
              <FaXTwitter />
            </div>
            <div className="flex  bg-black py-2 px-2 text-white rounded-4xl text-xl justify-center ">
              <FaRegCircle />
            </div>
            <div className="flex  bg-black py-2 px-2 text-white rounded-4xl text-xl justify-center ">
              <FaTiktok />
            </div>
            <div className="flex  bg-black py-2 px-2 text-white rounded-4xl text-xl justify-center ">

              <FaInstagram />
            </div>
          </div>
        </div>
      </footer>

      {/* Flags */}
      <div className="flex justify-center gap-4 mt-10 mb-4 px-4">
        <Image
  src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666b44696cafd33dbf47aef3_Container.svg"
  alt="Aboriginal Flag"
  width={60}
  height={40}
  className="w-[50px] sm:w-[60px] h-auto"
/>

<Image
  src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666b44694653c36473453f36_Container-1.svg"
  alt="Torres Strait Flag"
  width={60}
  height={40}
  className="w-[50px] sm:w-[60px] h-auto"
/>

      </div>

      {/* Acknowledgement */}
      <p className="text-center text-[13px] sm:text-[14px] text-white px-4 max-w-5xl mx-auto pb-10 leading-relaxed">
        We acknowledge the Traditional Custodians of the land on which our office
        stands, The Wurundjeri people of the Kulin Nation, and pay our respects
        to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721
        562), 1–9 Sackville St, Collingwood VIC 3066
      </p>
    </div>
  );
}
