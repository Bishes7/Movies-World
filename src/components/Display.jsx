import React from "react";
import Card from "./Card";

const Display = () => {
  return (
    <div className="container mt-5 rounded ">
      <div className=" p-3 bg-dark">
        <div className="row ">
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary">
                All
              </button>
              <button type="button" className="btn btn-warning">
                Drama
              </button>
              <button type="button" className="btn btn-info">
                Action
              </button>
            </div>
            <div className="text-light mt-2">2 movies listed</div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            {}
            {/* <Card />   */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
