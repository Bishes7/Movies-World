import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { fetchFromApi } from "../utils/axios";
import { randomChar } from "../utils/random";

const Hero = () => {
  const [searchedMovie, setSearchedMovie] = useState({});

  const [bgImg, setBgImg] = useState("");

  const shouldFetchRef = useRef(true);

  const searchRef = useRef("");

  useEffect(() => {
    if (shouldFetchRef.current) {
      fetchMovie(randomChar());
      shouldFetchRef.current = false;
    }
  }, []);

  const fetchMovie = async (str) => {
    const movie = await fetchFromApi(str);
    setSearchedMovie(movie);
    setBgImg(movie.Poster);
  };

  const handleMovieSearch = () => {
    const str = searchRef.current.value;
    fetchMovie(str);
    searchRef.current.value = "";
  };

  const movieStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div>
      <nav className=" py-2 text-warning text-center fixed-top    ">
        <h2 className="fw-bold">Movie World</h2>
      </nav>

      <div
        className="hero d-flex justify-content-center text-white align-items-center  "
        style={movieStyle}
      >
        <div className="hero-content">
          <div className="form-center">
            <div className="text-center">
              <h1>Search Millions of Movies</h1>
              <p>Find about the move more in details before watching them</p>
            </div>
          </div>

          <div className="input-group my-5">
            <input
              ref={searchRef}
              type="text"
              className="form-control"
              placeholder="Search for Movies"
              aria-label="Search for Movies"
              aria-describedby="button-addon2"
            />
            <button
              onClick={handleMovieSearch}
              className="btn btn-danger"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>

          <div className="movie-card-display">
            <Card searchedMovie={searchedMovie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
