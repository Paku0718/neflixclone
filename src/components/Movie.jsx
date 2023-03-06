import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
      <img
        className="block h-auto w-full"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 h-full w-full text-white opacity-0 hover:bg-black/80 hover:opacity-100">
        <p className="white-space-normal flex h-full items-center justify-center text-center text-xs font-bold md:text-sm">
          {item?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="left absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="left absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
