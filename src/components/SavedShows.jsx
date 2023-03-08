import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">My Shows</h2>
      <div className="group relative flex items-center ">
        <MdChevronLeft
          onClick={slideLeft}
          className="absolute z-10  hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="relative left-0 h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {/* {movies!=undefined && movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))} */}
          {movies !== undefined &&
            movies.map((item, id) => {
              return (
                
                <div
                  key={id}
                  className=" relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px] "
                  >
                  <img
                    className="  block h-auto w-full "
                    src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                    alt={item?.title}
                  />
                  <div className="absolute top-0 left-0 h-full w-full text-white opacity-0 hover:bg-black/80 hover:opacity-100">
                    <p className="white-space-normal flex h-full items-center justify-center text-center text-xs font-bold md:text-sm">
                      {item?.title}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className=" absolute right-0 z-10 hidden cursor-pointer rounded-full bg-white  opacity-50 hover:opacity-100 group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;
