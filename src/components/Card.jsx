import React from "react";

const Card = ({}) => {
  const Poster = "https://omdbapi.com/src/poster.jpg";
  return (
    <div className="container movie-card-item ">
      <div className="row  border rounded text-dark p-3  ">
        <div className="col-md">
          <img src={Poster} alt="" />
        </div>
        <div className="col-md">
          <h3>Movie Name</h3>
          <p>IMDB Rating 8</p>
          <p>Lorem ipsum dolor sit amet.</p>
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
