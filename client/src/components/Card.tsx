"use client";

import { useEffect, useState } from "react";
import { getNasaData } from "@/service/nasa";
import Image from "next/image";

export default function Card() {
  const [postList, setPostList] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const posts = await getNasaData();
      setPostList(posts);
    };
    fetchData();
  }, []);

  return (
    postList && (
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white border-zinc-200 border-gray-200">
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{postList?.title}</h2>
          <h6 className="font-bold text-xl mb-2">{postList?.date}</h6>
          <p className="text-gray-700 text-base">
            {postList?.url && (
              <Image
                width={700}
                height={500}
                src={postList?.url}
                className="object-cover"
                alt={postList?.title}
              />
            )}
          </p>
        </div>
        <div className="w-full flex justify-center p-2">
          <button
            className="bg-white border-black border rounded p-[3px]"
            onClick={getNasaData}
          >
            Click!
          </button>
        </div>
        {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #Tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #Tag3
        </span>
      </div> */}
      </div>
    )
  );
}
