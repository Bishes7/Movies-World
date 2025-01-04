import React from "react";
import Card from "./Card";

const Hero = () => {
  const movieStyle = {
    backgroundImage: `url("https://omdbapi.com/src/poster.jpg")`,
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
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button className="btn btn-danger" type="button" id="button-addon2">
              Search
            </button>
          </div>

          <div className="movie-card-display">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
