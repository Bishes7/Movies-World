import React from "react";

const Card = ({ searchedMovie }) => {
  const { Poster, Title, imdbRating, Plot } = searchedMovie;

  return (
    <div className="container ">
      <div className="row  border rounded text-dark p-3 movie-card-item  ">
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>{Title}</h3>
          <p>IMDB Rating:{imdbRating} </p>
          <p>{Plot?.slice(0, 70)}</p>
          <div className="d-flex justify-content-around">
            <button className="btn btn-info">Drama</button>
            <button className="btn btn-danger">Action</button>
          </div>
          <div className="d-grid my-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
