import axios from "axios";
import React, { useEffect, useState } from "react";
import { icons } from "react-icons/lib";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">{title}</h2>
      <div className="group relative flex items-center ">
        <MdChevronLeft
          onClick={slideLeft}
          className="absolute z-10  hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="relative left-0 h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          {/* {movies!=undefined && movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))} */}
          {movies !== undefined &&
            movies.map((item, id) => {
              return <Movie key={id} item={item} />;
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

export default Row;
