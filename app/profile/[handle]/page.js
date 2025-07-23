import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function Profile({ params }) {
  const handle = params.handle;
  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");

  const items = await collection.find({ handle }).toArray();

  if (!items || items.length === 0) {
    return notFound();
  }

const { image: rawImage, bio } = items[0];
const image = rawImage.trim(); 


  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-green-100 flex justify-center items-start py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 text-center border border-gray-200">
        <Image
  src={image}
  alt={handle}
  width={112} 
  height={112} 
  className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-green-300 shadow-md"
/>

        <h2 className="text-3xl font-extrabold mt-4 text-gray-900">@{handle}</h2>
        <p className="text-gray-600 mt-2 italic">{bio}</p>

        <div className="mt-8 space-y-4">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.links}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-5 bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold rounded-xl shadow hover:scale-[1.02] hover:from-green-500 hover:to-green-600 transition-all duration-200"
            >
              {item.linktext}
            </Link>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-8">
          Powered by <span className="font-semibold text-green-500">Linktree Clone</span>
        </p>
      </div>
    </div>
  );
}
